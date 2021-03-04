import { BotClient } from '../client/index';
import { CommandContext } from '../command/CommandContext';
import { CommandParameters } from '../command/parameters/CommandParameters';

// #region Scope Declaration
interface commandOptions {
  name: string;
  description: string;
  category: string;
  usage: string;
  enabled?: boolean;
  guildOnly?: boolean;
  aliases?: string[];
  type?: string;
}
// #endregion

export declare interface Command {
  bot: BotClient;
  options: commandOptions;
  parameters: Array<object>
  name: string;
  description: string;
  category: string;
  usage: string;
  enabled: boolean;
  guildOnly: boolean;
  aliases: string[];
  type: string;
}

export class Command {
  constructor(bot: BotClient, options: commandOptions, parameters: Array<object>) {
    this.bot = bot;
    this.parameters = parameters;
    this.setup(options);
  }

  // #region Methods
  private setup(options: commandOptions) {
    this.name = options.name || 'none';
    this.description = options.description || 'none';
    this.category = options.category || 'none';
    this.usage = options.usage || '';
    this.enabled = options.enabled || false;
    this.guildOnly = options.guildOnly || true;
    this.aliases = options.aliases || [];
    this.type = 'command';
  }

  /**
   * Gets called if the command doesn't have a run method.
   * @param {CommandContext} ctx The commands context.
   * @returns {void}
   * @memberof Command
   */
  run(ctx: CommandContext): Promise<void> | void {
    throw new Error(`${this.constructor.name} doesn't have a run() method.`);
  }

  public async _run(ctx: CommandContext) {
    const { client } = ctx;
    // eslint-disable-next-line prefer-destructuring
    let args = ctx.args;
    try {
      if (this.parameters) {
        args = await CommandParameters.handle(ctx, this.parameters, args);
      }

      await this.run(ctx);
    } catch (error) {
      client.emit('error', error);
    }
  }
  // #endregion
}
