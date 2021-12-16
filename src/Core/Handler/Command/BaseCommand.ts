import { ApplicationCommandOption } from 'discord.js';
import { Handler, Managers } from '../..';

/**
 * The BaseCommand Interface
 */
export interface BaseCommand {
  name: string;
  aliases: string[];
  category: Handler.Command.CommandCategories;
  description: string;
  guildOnly: boolean;
  ownerOnly: boolean;
  usage: string;
  enabled: boolean;
  options: Array<ApplicationCommandOption>;
  permission?: Managers.Permissions.PermissionLevel;
  runNormal: (ctx: Handler.Command.CommandContext) => Promise<void>;
  runSlash: (ctx: Handler.Command.SlashContext) => Promise<void>;
}
