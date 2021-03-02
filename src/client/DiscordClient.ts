import { Client, ClientOptions } from 'discord.js';
import BotClient from './BotClient';

// #region Scope Declaration
declare module 'discord.js' {
  interface Client {
    bot: BotClient;
  }
}
// #endregion

class DiscordClient extends Client {
  getGuild(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(options: ClientOptions, bot: BotClient) {
    super(options);
    this.bot = bot;
  }
  // #endregion
}

export default DiscordClient;
