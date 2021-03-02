import { BotClient } from '@client/index';
import { Client, ClientOptions } from 'discord.js';

declare module 'discord.js' {
  interface Client {
    bot: BotClient;
  }
}

export declare interface DiscordClient {
  bot: BotClient;
}

export class DiscordClient extends Client {
  getGuild(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(options: ClientOptions, bot: BotClient) {
    super(options);
    this.bot = bot;
  }
}
