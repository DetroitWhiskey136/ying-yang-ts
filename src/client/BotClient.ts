import { Collection, ClientOptions } from 'discord.js';
import { Database } from '../database';
import { Command, Event } from '../handlers';
import { Logger, FileUtil } from '../util';
import DiscordClient from './DiscordClient';

const fileUtil = new FileUtil();

class BotClient {
  // #region Type Declarations
  public client: DiscordClient;

  public logger: Logger;

  public events: Collection<string, Event>;

  public commands: Collection<string, Command>;

  public aliases: Collection<string, string>;

  public database: Database;
  // #endregion

  // #region Constructor
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
  // #endregion

  // #region Methods
  // #endregion
}

export default BotClient;
