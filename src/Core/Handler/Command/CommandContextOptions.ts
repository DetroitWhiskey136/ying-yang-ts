import { Message } from 'discord.js';
import { Client } from '../..';

/**
 * Options used to build CommandContext
 */
export type CommandContextOptions = {
  bot: Client.BotClient;
  message: Message;
  prefix: string | null;
  query: string;
  args: string[];
}
