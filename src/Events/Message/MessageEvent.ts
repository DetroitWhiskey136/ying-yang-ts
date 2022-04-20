import {
  Message,
  TextChannel,
  DMChannel,
  NewsChannel,
  ColorResolvable,
  GuildMember,
} from "discord.js";
import { PermissionLevel } from "src/Core/Managers/Permissions";
import { Core } from "../../index";

type Channel = TextChannel | DMChannel | NewsChannel;

export class MessageEvent extends Core.Handler.Event.Event {
  constructor() {
    super({
      enabled: true,
      name: "messageCreate",
    });
  }

  private static isValidMessage(message: Message) {
    const { author, channel, client, guild } = message;
    return (
      !author.bot ||
      (channel instanceof TextChannel &&
        channel
          .permissionsFor(
            guild?.members.cache.get(client.user!.id) as GuildMember
          )
          ?.has("SEND_MESSAGES") !== true)
    );
  }

  private static getPermLevel(message: Message, bot: Core.Client.BotClient) {
    const { author, member, guild } = message;

    return guild
      ? Core.Managers.Permissions.permMember(member as GuildMember, bot)
      : Core.Managers.Permissions.permUser(author, bot);
  }

  private static getPrefix(
    prefix: string,
    { client, content }: Message
  ): string {
    const fixedPrefix = Core.Util.Strings.escapeRegExp(prefix);
    const fixedUsername = Core.Util.Strings.escapeRegExp(
      client.user?.username ?? ""
    );

    const PREFIX_REGEX = new RegExp(
      `^(<@!?${client.user?.id}>|${fixedPrefix}|${fixedUsername})?`,
      "i"
    );
    const matchPrefix = content.match(PREFIX_REGEX);

    if (matchPrefix !== null && matchPrefix.length > 1) {
      return matchPrefix[0];
    }
    return "";
  }

  /**
   *  Creates a nice little embed for returning information to the user.
   * @param {Channel} channel the message channel
   * @param {String} color the embed color wanted
   * @param {String} content the message you want to send to the user i.e. "Don't be a dumbass"
   * @returns {void}
   */
  createEmbed(channel: Channel, color: ColorResolvable, content: string): void {
    if (content.length === 0) throw new Error("A content cannot be empty!");

    const embed = new Core.Discord.Embed()
      .setColor(color)
      .setDescription(content);

    channel.send({ embeds: [embed] });
  }

  async run(
    bot: Core.Client.BotClient,
    client: Core.Client.DiscordClient,
    message: Message
  ) {
    const { author, channel, content, guild, member } = message;
    if (guild)
      bot.database.guilds.ensure(guild.id, Core.Database.Models.Guild.Guild);
    if (member) {
      bot.database.members.ensure(
        member.id,
        Core.Database.Models.Member.Member
      );
    }
    if (author)
      bot.database.users.ensure(author.id, Core.Database.Models.User.User);
    if (author.id === process.env.BOT_DEVELOPER)
      bot.database.users.update(author.id, { botDeveloper: true });

    const authorNick = Core.Util.Strings.setNickname(author.username);

    if (
      guild &&
      bot.database.guilds.get(guild.id).autoFormatUsernames &&
      guild?.me?.permissions?.has("MANAGE_NICKNAMES") !== false &&
      member?.displayName !== authorNick
    ) {
      member?.setNickname(authorNick);
    }

    if (!MessageEvent.isValidMessage(message)) return;

    if (!author.bot && member !== null && guild) {
      const memberDB = bot.database.members.get(member.id).guilds;
      if (!memberDB[guild.id] || !memberDB[guild.id].level) {
        bot.database.members.update(member.id, {
          guilds: {
            [guild.id]: {
              level: 0,
            },
          },
        });
      }
      member.level++;
    }

    const prefix = guild?.prefix ?? Core.Util.Constants.OPTIONS.PREFIX;
    const usedPrefix = MessageEvent.getPrefix(prefix, message);

    const MENTION_REGEX = new RegExp(`^(<@!?${client.user?.id}>)`);
    const isMentioned = MENTION_REGEX.test(message.content);

    if (isMentioned && usedPrefix.length === 0) {
      this.createEmbed(
        channel as Channel,
        "BLUE",
        Core.Util.Strings.hasPlaceholder(
          Core.Util.Constants.MESSAGES.PREFIX,
          "{prefix}",
          `\`${prefix}\``
        )
      );
      return;
    }

    const args = content.slice(usedPrefix?.length).trim().split(/ +/g);

    const commandName = args.shift()!.toLowerCase();
    const command =
      bot.commands.get(commandName) ??
      bot.commands.get(bot.aliases.get(commandName)!);

    if (isMentioned && command === undefined) {
      this.createEmbed(
        channel as Channel,
        "BLUE",
        Core.Util.Strings.hasPlaceholder(
          Core.Util.Constants.MESSAGES.PREFIX,
          "{prefix}",
          `\`${prefix}\``
        )
      );
      return;
    }

    if (command === undefined || usedPrefix.length === 0) return;

    if ((command.permission ?? 0) > MessageEvent.getPermLevel(message, bot)) {
      this.createEmbed(
        channel as Channel,
        "RED",
        "You do not have permission to use this command #getgud"
      );
      return;
    }

    // if (command.permLevel !== getPermLevel(author)) return;
    // why not use number for this and > / < / >= / <=

    const params = {
      args,
      bot,
      message,
      prefix,
      query: args.join(" "),
    };

    command._runNormal(new Core.Handler.Commands.CommandContext(params));
  }
}
