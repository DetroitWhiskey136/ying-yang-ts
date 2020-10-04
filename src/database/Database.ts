import BotClient from '../client/BotClient';
import EnmapProvider from '../database/EnmapProvider';
import {
  Settings, settings,
  Guild, guilds,
  User, users,
} from './models';

class Database {
  public settings: EnmapProvider<Settings> = new EnmapProvider('settings');

  public guilds: EnmapProvider<Settings> = new EnmapProvider('guilds');

  public users: EnmapProvider<Settings> = new EnmapProvider('users');
}

/**
 * The Database used by the client
 */
/* class Database {
  client: BotClient;
  fn: {};
  help: {};

  *
   * This creates the database functions
   * @param {*} client
   * @property fn

  constructor(client: BotClient) {
    this.client = client;
    this.fn = {};
    this.help = {};

    // get the files from classes and assign them.
    for (const i in models) {
      this[i.toLowerCase()] = new Enmap(i, { dataDir });
      Object.assign(this.fn, { [i.toLowerCase()]: new models[i](this.client, this) });
      Object.assign(this.help, { [i.toLowerCase()]: this.fn[i.toLowerCase()].__proto__ });
    }
  }
} */

export default Database;
