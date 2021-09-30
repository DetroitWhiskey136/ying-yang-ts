import { Client, ClientOptions } from 'discord.js';
import { Client as YYClient } from '..';

declare module 'discord.js' {
  interface Client {
    bot: YYClient.BotClient;
  }
}

/**
 * @interface DiscordClient
 */
export interface DiscordClient {
  bot: YYClient.BotClient;
}

/**
 * The DiscordClient class is a special class it's effectively the discord.js
 * Client class but with a magic circular reference to the BotClient class (bot).
 * ```javascript
 * new DiscordClient(options, bot)
 * ```
 * @important The only time this class should be called is in the BotClient class.
 */
export class DiscordClient extends Client {
  /**
   *Creates an instance of DiscordClient.
   * @param options - the ClientOptions
   * @param bot - The BotClient
   */
  constructor(options: ClientOptions, bot: YYClient.BotClient) {
    super(options);
    /** note this is bad practice and should be revised asap */
    this.bot = bot;
  }
}
