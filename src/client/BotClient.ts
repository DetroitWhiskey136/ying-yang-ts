import { DiscordClient } from '@client/DiscordClient';
import { Collection, ClientOptions } from 'discord.js';
import { Database } from '../database';
import { Command, Event } from '../handlers';
import { Logger, FileUtil } from '../util';

const fileUtil = new FileUtil();

/**
 * The BotClient Interface
 * @interface BotClient
 */
export interface BotClient {
  client: DiscordClient;
  logger: Logger;
  events: Collection<string, Event>;
  commands: Collection<string, Command>;
  aliases: Collection<string, string>;
  database: Database;
}

/**
* The BotClient Class.
* @class BotClient
*/
export class BotClient {
  constructor(options: ClientOptions) {
    this.client = new DiscordClient(options, this);
    this.logger = new Logger();
    this.events = new Collection();
    this.commands = new Collection();
    this.aliases = new Collection();
    this.database = new Database();

    console.log();
    if (!(process.env.NODE_ENV
      ? process.env.NODE_ENV.indexOf('production') > -1
      : false
    )) {
      fileUtil.LoadFiles('src/events', this);
      fileUtil.LoadFiles('src/commands', this);
    } else {
      fileUtil.LoadFiles('dist/events', this);
      fileUtil.LoadFiles('dist/commands', this);
    }
  }
}
