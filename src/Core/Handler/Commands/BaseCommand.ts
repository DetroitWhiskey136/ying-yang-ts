import { ApplicationCommandOption } from 'discord.js';
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
  options: Array<ApplicationCommandOption>;
  permission?: Managers.Permissions.PermissionLevel;
  runNormal: (ctx: Handler.Commands.CommandContext) => Promise<void>;
  runSlash: (ctx: Handler.Commands.SlashContext) => Promise<void>;
}
