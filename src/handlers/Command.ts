/* eslint-disable max-classes-per-file */

import {
  Message, MessageMentions, GuildMember, Guild, User,
  TextChannel, DMChannel, NewsChannel, CommandInteraction,
} from 'discord.js';
import {
  BotClient, DiscordClient, Database,
} from '../index';

export namespace YinYangCommand {

  // #region Command Context,
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
    prefix: string | null;
    query: string;
    args: string[];
    database: Database;
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
      this.prefix = options.prefix || null;
      this.query = options.query;
      this.args = options.args;
      this.database = options.bot.database;
    }
  }
  // #endregion

  // #region Slash Command Context,
  interface slashContext {
    bot: BotClient;
    commandInteraction: CommandInteraction;
  }

  export declare interface SlashContext {
    bot: BotClient;
   commandInteraction: CommandInteraction;
   client: DiscordClient;
   database: Database;
  }
  export class SlashContext {
    constructor(options: slashContext) {
      this.bot = options.bot;
      this.client = options.bot.client;
      this.commandInteraction = options.commandInteraction;
      this.database = options.bot.database;
    }
  }
  // #endregion

  /**
   * These are the available Categories for the bots commands.
   */
  export enum CommandCategories {
    GENERAL = 'General',
    ADMIN = 'Admin',
    MODERATOR = 'Moderator',
    MUSIC = 'Music',
    FUN = 'Fun',
    IMAGES = 'Images',
    SYSTEM = 'System',
    GIVEAWAYS = 'Giveaways',
    UTILITY = 'Utility',
    DEVELOPER = 'Developer',
    UNKNOWN = 'Unknown',
  }
  export type CommandOptions = {
    name: string,
    aliases?: string[],
    category: CommandCategories,
    description?: string,
    guildOnly?: boolean,
    ownerOnly?: boolean,
    usage?: string,
    enabled?: boolean
}

  export interface BaseCommand {
    name: string
    aliases: string[]
    category: CommandCategories
    description: string
    guildOnly: boolean
    ownerOnly: boolean
    usage: string
    enabled: boolean

    runNormal: (ctx: CommandContext) => unknown
    runSlash: (ctx: SlashContext) => unknown
  }

  export class Command implements BaseCommand {
    private options: CommandOptions;
    public name: string;
    public aliases: string[];
    public category: CommandCategories;
    public description: string;
    public guildOnly: boolean;
    public ownerOnly: boolean;
    public usage: string;
    public enabled: boolean;

    constructor(options: CommandOptions) {
      this.options = options;
      this.name = options.name;
      this.aliases = options.aliases ?? [];
      this.category = options.category ?? CommandCategories.UNKNOWN;
      this.description = options.description ?? 'No description';
      this.guildOnly = options.guildOnly ?? false;
      this.ownerOnly = options.ownerOnly ?? false;
      this.usage = options.usage ?? 'No usage';
      this.enabled = options.enabled ?? true;
    }

    async runNormal(ctx: CommandContext) {
      throw Error('This field is not implemented');
    }

    async _runNormal(ctx: CommandContext) {
      this.runNormal(ctx)
        .catch((e) => ctx.client.emit('error', e));
    }

    async runSlash(ctx: SlashContext) {
      throw Error('This field is not implemented');
    }

    async _runSlash(ctx: SlashContext) {
      this.runSlash(ctx)
        .catch((e) => ctx.client.emit('error', e));
    }
  }

}
