import { Collection, ClientOptions } from 'discord.js';
import {
  Database, Command, Event, Logger, Files, DiscordClient,
} from '../index';

/**
 * @interface BotClient
 */
export interface BotClient {
  aliases: Collection<string, string>;
  client: DiscordClient;
  commands: Collection<string, Command>;
  database: Database;
  events: Collection<string, Event>;
  logger: Logger;
}

/**
 * The BotClient class is used to keep the bots various classes separate from
 * the discord.js Client class.
 * @class BotClient
 * @param { ClientOptions } options discord.js Client options.
*/
export class BotClient {
  constructor(options: ClientOptions) {
    /** Commands can have aliases to help simplify calling the command. */
    this.aliases = new Collection();
    /** This is where the discord.js Client is created. */
    this.client = new DiscordClient(options, this);
    /** Commands are classes called when a user requests then in a discord
     * channel. e.g. `{prefix} help` is a command */
    this.commands = new Collection();
    /** The database is a sqlite datastore that uses a json format
     * {key: value}, its used to store stuff for persistance.
     * NOTE: avoid storing user data its not worth the work and liability.
     */
    this.database = new Database();
    /** Events are a section of code that is ran when a discord does something. */
    this.events = new Collection();
    /** The logger class sounds super scary i bet, its not tho it just logs
     * system messages to the console and a file in the data/logs folder. */
    this.logger = new Logger();

    console.log();
    if (!(process.env.NODE_ENV
      ? process.env.NODE_ENV.indexOf('production') > -1
      : false
    )) {
      Files.LoadFiles('src/events', this);
      Files.LoadFiles('src/commands', this);
    } else {
      Files.LoadFiles('dist/src/events', this);
      Files.LoadFiles('dist/src/commands', this);
    }
  }
}
