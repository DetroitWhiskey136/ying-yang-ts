import { Collection, ClientOptions } from 'discord.js';
import DiscordClient from './DiscordClient';
import { Logger, FileUtil } from 'src/util';
import { Command, Event } from 'src/handlers';
import { Database } from 'src/database';

const fileUtil = new FileUtil();

class BotClient {
  client: DiscordClient;
  logger: Logger;
  events: Collection<string, Event>;
  commands: Collection<string, Command>;
  aliases: Collection<string, string>;
  database: Database;

  constructor (options: ClientOptions) {
    this.client = new DiscordClient(options, this);
    this.logger = new Logger();
    this.events = new Collection();
    this.commands = new Collection();
    this.aliases = new Collection();
    this.database = new Database();

    fileUtil.LoadFiles('src/events', this);
    fileUtil.LoadFiles('src/commands', this);

  }
}

export default BotClient;
