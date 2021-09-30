import {
  CommandInteraction,
} from 'discord.js';
import { Client } from '../..';

/**
 * Options used to build SlashContext
 */
export type SlashContextOptions = {
  bot: Client.BotClient;
  commandInteraction: CommandInteraction;
}
