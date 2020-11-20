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
  constructor(options: ClientOptions, bot: BotClient) {
    super(options);
    this.bot = bot;
  }
  // #endregion

  // #region Methods
  // #endregion
}

export default DiscordClient;
