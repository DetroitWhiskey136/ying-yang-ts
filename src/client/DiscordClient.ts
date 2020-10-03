import { Client, ClientOptions } from 'discord.js';
import { BotClient } from 'src/client';

declare module 'discord.js' {
  interface Client {
    bot: BotClient;
  }
}

class DiscordClient extends Client {
  bot: BotClient;

  constructor(options: ClientOptions, bot: BotClient) {
    super(options);
    this.bot = bot;
  }
}

export default DiscordClient;
