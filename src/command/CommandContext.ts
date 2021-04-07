import {
  Message, MessageMentions, GuildMember, Guild, User,
  TextChannel, DMChannel, VoiceChannel, NewsChannel,
} from 'discord.js';

import { BotClient } from '../client/BotClient';
import { DiscordClient } from '../client/DiscordClient';
import { Database } from '../database';

interface commandContext {
  bot: BotClient;
  message: Message;
  prefix: string | null;
  query: string;
  args: string[];
}

export declare interface CommandContext {
  bot: BotClient;
  message: Message;
  mentions: MessageMentions;
  member: GuildMember | null;
  guild: Guild | null;
  author: User;
  channel: TextChannel | DMChannel | NewsChannel;
  client: DiscordClient;
  voiceChannel: VoiceChannel | null;
  prefix: string | null;
  query: string;
  args: string[];
  database: Database;
  flags: object;
  parseState?: object;
}

/**
 * The CommandContext Class
 * @class CommandContext
 */
export class CommandContext {
  constructor(options: commandContext) {
    this.bot = options.bot;
    this.message = options.message;
    this.mentions = options.message.mentions;
    this.member = options.message?.member;
    this.guild = options.message.guild;
    this.author = options.message.author;
    this.channel = options.message.channel;
    this.client = options.bot.client;
    this.voiceChannel = this.getVoiceChannel(this.member, this.guild, this.client);
    this.prefix = options.prefix || null;
    this.query = options.query;
    this.args = options.args;
    this.database = options.bot.database;
    this.flags = {};
    this.parseState = {};
  }

  /**
   * Gets a voicechannel if it exists/in-use.
   * @private
   * @param {(GuildMember | null)} member The member.
   * @param {(Guild | null)} guild The members guild.
   * @param {DiscordClient} client The client from discord.
   * @returns {VoiceChannel | null} return the voicechannel or null.
   * @memberof CommandContext
   */
  private getVoiceChannel(member: GuildMember | null, guild: Guild | null, client: DiscordClient):
  VoiceChannel | null {
    if (member) {
      return member.voice.channel;
    } if (guild && client.voice) {
      return client.voice.connections.get(guild.id)?.channel || null;
    }
    return null;
  }
}
