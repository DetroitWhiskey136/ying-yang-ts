import {
  Message, MessageMentions, GuildMember, Guild, User,
  TextChannel, DMChannel, NewsChannel, CommandInteraction,
  Collection, CommandInteractionOption,
} from 'discord.js';
import {
  BotClient, DiscordClient, Database,
} from '../index';

export namespace YinYangCommand {

  // #region Command Context,
  /**
   * The Command Context Interface options
   */
  interface commandContext {
    bot: BotClient;
    message: Message;
    prefix: string | null;
    query: string;
    args: string[];
  }

  /**
   * The Command Context Interface
   */
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
    /**
     * The options for the command context.
     * @param ctx commandContex options
     */
    constructor(ctx: commandContext) {
      this.bot = ctx.bot;
      this.message = ctx.message;
      this.mentions = ctx.message.mentions;
      this.member = ctx.message?.member;
      this.guild = ctx.message.guild;
      this.author = ctx.message.author;
      this.channel = ctx.message.channel;
      this.client = ctx.bot.client;
      this.prefix = ctx.prefix || null;
      this.query = ctx.query;
      this.args = ctx.args;
      this.database = ctx.bot.database;
    }
  }
  // #endregion

  // #region Slash Command Context,
  /**
   * The Slash Context Interface options
   */
  interface slashContext {
    bot: BotClient;
    commandInteraction: CommandInteraction;
  }

  /**
   * The Slash Context Interface
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
     * The options for the slash context.
     * @param ctx slashContex options
     */
    constructor(ctx: slashContext) {
      this.bot = ctx.bot;
      this.client = ctx.bot.client;
      this.commandInteraction = ctx.commandInteraction;
      this.database = ctx.bot.database;
    }
  }
  // #endregion

  /**
   * These are the available Categories for the bots commands.
   * ```js
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
    options?: Array<CommandInteractionOption>
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
    options: Array<CommandInteractionOption>

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
   *       aliases: [<'aliasname'>],
   *       category: YinYangCommand.CommandCategories.<CategoryName>,
   *       description: 'A Description of some sort',
   *       enabled: true,
   *       guildOnly: false,
   *       name: '<commandname>',
   *       usage: '<commandname> <paramas...>',
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
    }

    /**
     * The Commands Context.
     * @param {CommandContext} ctx CommandContext.
     * @returns {Promis<void>} the Commands Commands method
     */
    async runNormal(ctx: CommandContext) {
      throw Error('This field is not implemented');
    }

    /**
     * The Commands Context.
     * @note Treat this as a internal
     * @param {CommandContext} ctx CommandContext.
     * @returns {Promis<void>} the Commands Commands method
     */
    async _runNormal(ctx: CommandContext) {
      this.runNormal(ctx)
        .catch((e) => ctx.client.emit('error', e));
    }

    /**
     * The Slash Commands Context.
     * @param {SlashContext} ctx SlashContext.
     * @returns {Promis<void>} the Slash Commands method
     */
    async runSlash(ctx: SlashContext) {
      throw Error('This field is not implemented');
    }

    /**
     * The Slash Commands Context.
     * @note Treat this as a internal
     * @param {SlashContext} ctx SlashContext.
     * @returns {Promis<void>} the Slash Commands method
     */
    async _runSlash(ctx: SlashContext) {
      this.runSlash(ctx)
        .catch((e) => ctx.client.emit('error', e));
    }
  }

}
