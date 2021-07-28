import {
  Message, TextChannel, DMChannel, NewsChannel, ColorResolvable, GuildMember, Role,
} from 'discord.js';
import {
  BotClient, DiscordClient, Embed,
  Event, Strings, MESSAGES, OPTIONS,
  YinYangCommand, YinYangPermissions,
  Guild as GuildData, Member as MemberData, User as UserData,
} from '../../index';
import { WarningManager } from '../../managers/WarningManager';

type Channel = TextChannel | DMChannel | NewsChannel;

export class MessageEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'messageCreate',
    });
  }

  private static isValidMessage(message: Message) {
    const {
      author, channel, client, guild,
    } = message;
    return !author.bot
      || (channel instanceof TextChannel
      && channel.permissionsFor(guild?.members.cache.get(client.user!.id) as GuildMember)?.has('SEND_MESSAGES') !== true);
  }

  private static getPermLevel(message: Message, bot: BotClient) {
    const { author, member, guild } = message;

    return guild
      ? YinYangPermissions.permMember(member as GuildMember, bot)
      : YinYangPermissions.permUser(author, bot);
  }

  private static getPrefix(prefix: string, { client, content }: Message): string {
    const fixedPrefix = Strings.escapeRegExp(prefix);
    const fixedUsername = Strings.escapeRegExp(client.user?.username ?? '');

    const PREFIX_REGEX = new RegExp(`^(<@!?${client.user?.id}>|${fixedPrefix}|${fixedUsername})?`, 'i');
    const matchPrefix = content.match(PREFIX_REGEX);

    if (matchPrefix !== null && matchPrefix.length > 1) {
      return matchPrefix[0];
    }
    return '';
  }

  /**
   *  Creates a nice little embed for returning information to the user.
   * @param {Channel} channel the message channel
   * @param {String} color the embed color wanted
   * @param {String} content the message you want to send to the user i.e. "Don't be a dumbass"
   * @returns {void}
   */
  createEmbed(channel: Channel, color: ColorResolvable, content: string): void {
    if (content.length === 0) throw new Error('A content cannot be empty!');

    const embed = new Embed()
      .setColor(color)
      .setDescription(content);

    channel.send({ embeds: [embed] });
  }

  async run(bot: BotClient, client: DiscordClient, message: Message) {
    const {
      author, channel, content, guild, member,
    } = message;
    if (guild) bot.database.guilds.ensure(guild.id, GuildData);
    if (member) bot.database.members.ensure(member.id, MemberData);
    if (author) bot.database.users.ensure(author.id, UserData);

    const authorNick = Strings.setNickname(author.username);

    if (
      guild
      && bot.database.guilds.get(guild.id).autoFormatUsernames
      && guild?.me?.permissions?.has('MANAGE_NICKNAMES') !== false
      && member?.displayName !== authorNick
    ) {
      member?.setNickname(authorNick);
    }

    if (!MessageEvent.isValidMessage(message)) return;

    bot.logger.debug(`\n Message: ${message.content}\n`, `Guild: ${guild?.name} ~ ${guild?.id}\n`, `Member: ${member?.user.username} ~ ${member?.user.id}`);

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

    const prefix = guild?.prefix ?? OPTIONS.PREFIX;
    const usedPrefix = MessageEvent.getPrefix(prefix, message);

    const MENTION_REGEX = new RegExp(`^(<@!?${client.user?.id}>)`);
    const isMentioned = MENTION_REGEX.test(message.content);

    if (isMentioned && usedPrefix.length === 0) {
      this.createEmbed(channel as Channel, 'BLUE', Strings.hasPlaceholder(MESSAGES.PREFIX, '{prefix}', `\`${prefix}\``));
      return;
    }

    const args = content.slice(usedPrefix?.length).trim().split(/ +/g);

    const commandName = args.shift()!.toLowerCase();
    const command = bot.commands.get(commandName)
      ?? bot.commands.get(bot.aliases.get(commandName)!);

    if (isMentioned && command === undefined) {
      this.createEmbed(channel as Channel, 'BLUE', Strings.hasPlaceholder(MESSAGES.PREFIX, '{prefix}', `\`${prefix}\``));
      return;
    }

    if (command === undefined || usedPrefix.length === 0) return;

    if ((command.permission ?? 0) > MessageEvent.getPermLevel(message, bot)) {
      this.createEmbed(channel as Channel, 'RED', 'You do not have permission to use this command #getgud');
      return;
    }

    // if (command.permLevel !== getPermLevel(author)) return;
    // why not use number for this and > / < / >= / <=

    const params = {
      args, bot, message, prefix, query: args.join(' '),
    };

    command._runNormal(new YinYangCommand.CommandContext(params));
    bot.logger.debug(`\nCommand: ${command.name} \nQuery: ${params.query ?? ''} \n ran by ${author.username}`);
  }
}
