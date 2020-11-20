import CommandContext from '../command/CommandContext';
import Logger from '../util/Logger';

const logger = new Logger();

// #region Scope Declaration
interface commandOptions {
  name: string;
  description: string;
  category: string;
  usage: string;
  enabled: boolean;
  guildOnly: boolean;
  aliases: string[];
}
// #endregion

export default class Command {
  // #region Type Declarations
  name: string;

  description: string;

  category: string;

  usage: string;

  enabled: boolean;

  guildOnly: boolean;

  aliases: Array<string>;

  type: string;
  // #endregion

  // #region Constructor
  constructor(options: commandOptions) {
    this.name = options.name;
    this.description = options.description;
    this.category = options.category;
    this.usage = options.usage;
    this.enabled = options.enabled;
    this.guildOnly = options.guildOnly || false;
    this.aliases = options.aliases || [];
    this.type = 'command';
  }
  // #endregion

  // #region Methods
  /**
   * Gets called if the command doesn't have a run method.
   * @param {CommandContext} ctx The commands context.
   * @returns {Error} An Error for some reason.
   * @memberof Command
   */
  run(ctx: CommandContext): Error {
    throw new Error(`${this.constructor.name} doesn't have a run() method.`);
  }

  async _run(ctx: CommandContext) {
    try {
      await this.run(ctx);
    } catch (error) {
      logger.error(error.message, '\n', error.stack);
    }
  }
  // #endregion
}
