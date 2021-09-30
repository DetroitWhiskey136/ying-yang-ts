import {
  CommandInteraction,
} from 'discord.js';
import { Client, Database, Handler } from '../..';

/**
 * The SlashContext Interface
 */
export interface SlashContext {
  bot: Client.BotClient;
  commandInteraction: CommandInteraction;
  client: Client.DiscordClient;
  database: Database.ConnectionBridge;
}

/**
 * The SlashContext Class
 */
export class SlashContext {
  /**
   * Building the CommandContext with given options.
   * @param options SlashContextOptions options
   */
  constructor(options: Handler.Command.SlashContextOptions) {
    this.bot = options.bot;
    this.client = options.bot.client;
    this.commandInteraction = options.commandInteraction;
    this.database = options.bot.database;
  }
}
