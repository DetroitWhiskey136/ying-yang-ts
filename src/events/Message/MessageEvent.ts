import {
  Message, TextChannel, DMChannel, NewsChannel, ColorResolvable,
} from 'discord.js';
import { BotClient, DiscordClient } from '../../client/index';
import { CommandContext } from '../../command/CommandContext';
import { Embed } from '../../discord/Embed';
import { Event } from '../../handlers';
import { Strings, Constants } from '../../util';

const { MESSAGES, OPTIONS } = Constants;

type Channel = TextChannel | DMChannel | NewsChannel;

export class MessageEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'message',
    });
  }

  private isValidMessage(message: Message) {
    const { author, channel, client } = message;
    return !author.bot
      || (channel instanceof TextChannel
      && !channel.permissionsFor(String(client.user?.id))?.has('SEND_MESSAGES'));
  }

  private getPrefix(prefix: string, { client, content }: Message): string | null {
    const fixedPrefix = Strings.escapeRegExp(prefix);
    const fixedUsername = Strings.escapeRegExp(String(client.user?.username));

    const PrefixRegex = new RegExp(`^(<@!?${client.user?.id}>|${fixedPrefix}|${fixedUsername})?`, 'i');

    const matchPrefix = content.match(PrefixRegex);

    if (matchPrefix && matchPrefix.length) {
      return matchPrefix[0];
    }
    return null;
  }

  /**
   *  Creates a nice little embed for returning information to the user.
   * @param {Channel} channel the message channel
   * @param {String} color the embed color wanted
   * @param {String} message the message you want to send to the user i.e. "Don't be a dumbass"
   * @returns {void}
   */
  createEmbed(channel: Channel, color: ColorResolvable, message: string): void {
    if (!color || !message) throw new Error('A argument was not provided please check your work!');
    const embed = new Embed()
      .setColor(color)
      .setDescription(message);

    if (!channel || channel === undefined) throw new Error('Channel not provided please check your work!');
    channel.send(embed);
  }

  run(bot: BotClient, client: DiscordClient, message: Message) {
    const {
      author, channel, content, guild, member,
    } = message;

    if (!this.isValidMessage(message)) return;
    if (!member?.user.bot) {
      member?.addLevel();
    }
    const prefix = guild?.prefix ?? OPTIONS.PREFIX;
    const usedPrefix = this.getPrefix(prefix, message);

    const MentionRegex = new RegExp(`^(<@!?${client.user?.id}>)`);
    const mentioned = MentionRegex.test(message.content);

    if (mentioned && !usedPrefix) {
      this.createEmbed(channel, 'BLUE', Strings.hasPlaceholder(MESSAGES.PREFIX, '{prefix}', `\`${prefix}\``));

      return;
    }

    const args = content.slice(usedPrefix?.length).trim().split(/ +/g);

    const commandName = args.shift()?.toLowerCase() || '';
    const command = bot.commands.get(commandName)
      || bot.commands.get(String(bot.aliases.get(commandName)));

    if (mentioned && !command) {
      this.createEmbed(channel, 'BLUE', Strings.hasPlaceholder(MESSAGES.PREFIX, '{prefix}', `\`${prefix}\``));

      return;
    }

    if (!command || !usedPrefix) return;

    const params = {
      args, bot, message, prefix: guild?.prefix || '/', query: args.join(' '),
    };

    command._run(new CommandContext(params));
  }
}
