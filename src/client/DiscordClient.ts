import { Client, ClientOptions } from 'discord.js';
import { BotClient } from '../index';

declare module 'discord.js' {
  interface Client {
    bot: BotClient;
  }
}

/**
 * @interface DiscordClient
 */
export interface DiscordClient {
  bot: BotClient;
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
  constructor(options: ClientOptions, bot: BotClient) {
    super(options);
    /** note this is bad practice and should be revised asap */
    this.bot = bot;
  }
}
