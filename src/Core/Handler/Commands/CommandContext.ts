import {
  Message,
  MessageMentions,
  GuildMember,
  Guild,
  User,
  TextBasedChannel,
} from 'discord.js';
import { Client, Database, Handler } from '../..';

/**
 * The CommandContext Interface
 */
export interface CommandContext {
  bot: Client.BotClient;
  message: Message;
  mentions: MessageMentions;
  member: GuildMember | null;
  guild: Guild | null;
  author: User;
  channel: TextBasedChannel;
  client: Client.DiscordClient;
  prefix: string | null;
  query: string;
  args: string[];
  database: Database.ConnectionBridge;
}

/**
 * The CommandContext Class
 * @class CommandContext
 */
export class CommandContext {
  /**
   * Building the CommandContext with given options.
   * @param options Options to build CommandContext
   */
  constructor(options: Handler.Commands.CommandContextOptions) {
    this.bot = options.bot;
    this.message = options.message;
    this.mentions = options.message.mentions;
    this.member = options.message?.member;
    this.guild = options.message.guild;
    this.author = options.message.author;
    this.channel = options.message.channel;
    this.client = options.bot.client;
    this.prefix = options.prefix || null;
    this.query = options.query;
    this.args = options.args;
    this.database = options.bot.database;
  }
}
