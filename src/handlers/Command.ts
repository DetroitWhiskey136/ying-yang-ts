import {
  Message, MessageMentions, GuildMember, Guild, User, TextBasedChannel,
  CommandInteraction, ApplicationCommandOption, TextBasedChannels,
} from 'discord.js';
import {
  BotClient, DiscordClient, Database, YinYangPermissions,
} from '../index';

export namespace YinYangCommand {

  // #region Command Context,
  /**
   * Options used to build CommandContext
   */
  type CommandContextOptions = {
    bot: BotClient;
    message: Message;
    prefix: string | null;
    query: string;
    args: string[];
  }

  /**
   * The CommandContext Interface
   */
  export declare interface CommandContext {
    bot: BotClient;
    message: Message;
    mentions: MessageMentions;
    member: GuildMember | null;
    guild: Guild | null;
    author: User;
    channel: TextBasedChannels;
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
    /**
     * Building the CommandContext with given options.
     * @param options Options to build CommandContext
     */
    constructor(options: CommandContextOptions) {
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
  /**
   * Options used to build SlashContext
   */
  type SlashContextOptions = {
    bot: BotClient;
    commandInteraction: CommandInteraction;
  }

  /**
   * The SlashContext Interface
   */
  export declare interface SlashContext {
    bot: BotClient;
   commandInteraction: CommandInteraction;
   client: DiscordClient;
   database: Database;
  }

  /**
   * The SlashContext Class
   */
  export class SlashContext {
    /**
     * Building the CommandContext with given options.
     * @param options SlashContextOptions options
     */
    constructor(options: SlashContextOptions) {
      this.bot = options.bot;
      this.client = options.bot.client;
      this.commandInteraction = options.commandInteraction;
      this.database = options.bot.database;
    }
  }
  // #endregion

  /**
   * These are the available Categories for the bots commands.
   * ```ts
   * // usage
   * YinYangCommand.CommandCategories.<CategoryName>
   * ```
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

  /**
   * These are the available options for an given command.
   */
  export type CommandOptions = {
    name: string,
    aliases?: string[],
    category: CommandCategories,
    description?: string,
    guildOnly?: boolean,
    ownerOnly?: boolean,
    usage?: string,
    enabled?: boolean
    options?: Array<ApplicationCommandOption>
    permission?: YinYangPermissions.PermisssionLevel;
  }

  /**
   * The BaseCommand Interface
   */
  export interface BaseCommand {
    name: string
    aliases: string[]
    category: CommandCategories
    description: string
    guildOnly: boolean
    ownerOnly: boolean
    usage: string
    enabled: boolean
    options: Array<ApplicationCommandOption>
    permission?: YinYangPermissions.PermisssionLevel;
    runNormal: (ctx: CommandContext) => Promise<void>
    runSlash: (ctx: SlashContext) => Promise<void>
  }

  export interface ICommand extends BaseCommand {}

  export interface Command extends ICommand {}

  /**
   * The Command Class
   *
   * ```ts
   * // Usage
   * export class <CommandName>Command extends YinYangCommand.Command {
   *   constructor() {
   *     super({
   *       aliases: ['<aliasName>'],
   *       category: YinYangCommand.CommandCategories.<CategoryName>,
   *       description: 'A Description of some sort',
   *       enabled: true,
   *       guildOnly: false,
   *       name: '<commandName>',
   *       usage: '<commandName> <params...>',
   *       options: [<CommandInteractionOption>],
   *       ownerOnly: false,
   *     });
   *   }
   *
   *   runNormal(ctx: YinYangCommand.CommandContext) {
   *     ctx.channel.send('hi');
   *   }
   *
   *   runSlash(ctx: YinYangCommand.SlashContext) {
   *     ctx.commandInteraction.reply('hi');
   *   }
   * }
   * ```
   */
  export class Command implements BaseCommand {
    /**
     * Command Options
     * @param {CommandOptions} co This is the commands options
     */
    constructor(co: CommandOptions) {
      this.name = co.name;
      this.aliases = co.aliases ?? [];
      this.category = co.category ?? CommandCategories.UNKNOWN;
      this.description = co.description ?? 'No description';
      this.guildOnly = co.guildOnly ?? false;
      this.ownerOnly = co.ownerOnly ?? false;
      this.usage = co.usage ?? 'No usage';
      this.enabled = co.enabled ?? true;
      this.options = co.options ?? [];
      this.permission = co.permission ?? YinYangPermissions.PermisssionLevel.USER;
    }

    /**
     * The Commands Context.
     * @param {CommandContext} ctx CommandContext.
     * @returns {Promise<void>} the Commands Commands method
     */
    async runNormal(ctx: CommandContext) {
      throw Error('This field is not implemented');
    }

    /**
     * The Commands Context.
     * @note Treat this as a internal
     * @param {CommandContext} ctx CommandContext.
     * @returns {Promise<void>} the Commands Commands method
     */
    _runNormal(ctx: CommandContext) {
      this.runNormal(ctx)
        .catch((e) => ctx.client.emit('error', e));
    }

    /**
     * The Slash Commands Context.
     * @param {SlashContext} ctx SlashContext.
     * @returns {Promise<void>} the Slash Commands method
     */
    async runSlash(ctx: SlashContext) {
      throw Error('This field is not implemented');
    }

    /**
     * The Slash Commands Context.
     * @note Treat this as a internal
     * @param {SlashContext} ctx SlashContext.
     * @returns {Promise<void>} the Slash Commands method
     */
    _runSlash(ctx: SlashContext) {
      this.runSlash(ctx)
        .catch((e) => ctx.client.emit('error', e));
    }
  }
}
