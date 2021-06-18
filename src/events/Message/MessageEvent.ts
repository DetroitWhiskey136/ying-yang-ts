import {
  Message, TextChannel, DMChannel, NewsChannel, ColorResolvable,
} from 'discord.js';
import {
  BotClient, DiscordClient, Embed,
  Event, Strings, MESSAGES, OPTIONS,
  YinYangCommand,
} from '../../index';

type Channel = TextChannel | DMChannel | NewsChannel;

export class MessageEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'message',
    });
  }

  private static isValidMessage(message: Message) {
    const { author, channel, client } = message;
    return !author.bot
      || (channel instanceof TextChannel
      && channel.permissionsFor(String(client.user?.id))?.has('SEND_MESSAGES') !== true);
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

    channel.send({ embeds: [embed] })
      .catch();
  }

  async run(bot: BotClient, client: DiscordClient, message: Message) {
    const { author, channel, content } = message;
    const guild = message?.guild;
    const member = message?.member;
    const authorNick = Strings.setNickname(author.username);

    if (
      bot.database.guilds.get(guild!.id).autoFormatUsernames
      && guild?.me?.permissions?.has('MANAGE_NICKNAMES') !== false
      && member?.displayName !== authorNick
    ) {
      member?.setNickname(authorNick);
    }

    if (!MessageEvent.isValidMessage(message)) return;
    if (!author.bot && member !== null) {
      member?.addLevel();
    }

    const prefix = guild?.prefix ?? OPTIONS.PREFIX;
    const usedPrefix = MessageEvent.getPrefix(prefix, message);

    const MENTION_REGEX = new RegExp(`^(<@!?${client.user?.id}>)`);
    const isMentioned = MENTION_REGEX.test(message.content);

    if (isMentioned && usedPrefix.length === 0) {
      this.createEmbed(channel, 'BLUE', Strings.hasPlaceholder(MESSAGES.PREFIX, '{prefix}', `\`${prefix}\``));
      return;
    }

    const args = content.slice(usedPrefix?.length).trim().split(/ +/g);

    const commandName = args.shift()!.toLowerCase();
    const command = bot.commands.get(commandName)
      ?? bot.commands.get(bot.aliases.get(commandName)!);

    if (isMentioned && command === undefined) {
      this.createEmbed(channel, 'BLUE', Strings.hasPlaceholder(MESSAGES.PREFIX, '{prefix}', `\`${prefix}\``));
      return;
    }

    if (command === undefined || usedPrefix.length === 0) return;

    const params = {
      args, bot, message, prefix, query: args.join(' '),
    };

    command._runNormal(new YinYangCommand.CommandContext(params))
      .catch((e) => client.emit('error', e));
    bot.logger.debug(`\nCommand: ${command.name} \nQuery: ${params.query ?? ''} \n ran by ${author.username}`);
  }
}
