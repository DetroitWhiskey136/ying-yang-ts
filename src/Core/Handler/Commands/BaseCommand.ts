import { ApplicationCommandOptionData } from 'discord.js';
import { Handler, Managers } from '../..';

/**
 * The BaseCommand Interface
 */
export interface BaseCommand {
  name: string;
  aliases: string[];
  category: Handler.Commands.CommandCategories;
  description: string;
  guildOnly: boolean;
  ownerOnly: boolean;
  usage: string;
  enabled: boolean;
  options: Array<ApplicationCommandOptionData>;
  permission?: Managers.Permissions.PermissionLevel;
  location: string;
  filename: string;
  runNormal: (ctx: Handler.Commands.CommandContext) => Promise<void>;
  runSlash: (ctx: Handler.Commands.SlashContext) => Promise<void>;
}
