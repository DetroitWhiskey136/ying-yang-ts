import {
  Handler, Managers,
} from '../..';

export interface ICommand extends Handler.Command.BaseCommand {}

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
export class Command implements Handler.Command.BaseCommand {
  /**
   * Command Options
   * @param {Handler.Command.CommandOptions} co This is the commands options
   */
  constructor(co: Handler.Command.CommandOptions) {
    this.name = co.name;
    this.aliases = co.aliases ?? [];
    this.category = co.category ?? Handler.Command.CommandCategories.UNKNOWN;
    this.description = co.description ?? 'No description';
    this.guildOnly = co.guildOnly ?? false;
    this.ownerOnly = co.ownerOnly ?? false;
    this.usage = co.usage ?? 'No usage';
    this.enabled = co.enabled ?? true;
    this.options = co.options ?? [];
    this.permission = co.permission ?? Managers.Permissions.PermissionLevel.USER;
  }

  /**
   * The Commands Context.
   * @param {Handler.Command.CommandContext} ctx CommandContext.
   * @returns {Promise<void>} the Commands Commands method
   */
  async runNormal(ctx: Handler.Command.CommandContext) {
    throw Error('This field is not implemented');
  }

  /**
   * The Commands Context.
   * @note Treat this as a internal
   * @param {Handler.Command.CommandContext} ctx CommandContext.
   * @returns {Promise<void>} the Commands Commands method
   */
  _runNormal(ctx: Handler.Command.CommandContext) {
    this.runNormal(ctx)
      .catch((e) => ctx.client.emit('error', e));
  }

  /**
   * The Slash Commands Context.
   * @param {Handler.Command.SlashContext} ctx SlashContext.
   * @returns {Promise<void>} the Slash Commands method
   */
  async runSlash(ctx: Handler.Command.SlashContext) {
    throw Error('This field is not implemented');
  }

  /**
   * The Slash Commands Context.
   * @note Treat this as a internal
   * @param {Handler.Command.SlashContext} ctx SlashContext.
   * @returns {Promise<void>} the Slash Commands method
   */
  _runSlash(ctx: Handler.Command.SlashContext) {
    this.runSlash(ctx)
      .catch((e) => ctx.client.emit('error', e));
  }
}
