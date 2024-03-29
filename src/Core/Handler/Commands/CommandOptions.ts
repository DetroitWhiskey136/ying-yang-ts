import { ApplicationCommandOptionData } from 'discord.js';
import { Handler, Managers } from '../..';

/**
 * These are the available options for an given command.
 */
export type CommandOptions = {
  name: string;
  aliases?: string[];
  category: Handler.Commands.CommandCategories;
  description?: string;
  guildOnly?: boolean;
  ownerOnly?: boolean;
  usage?: string;
  enabled?: boolean;
  options?: Array<ApplicationCommandOptionData>;
  permission?: Managers.Permissions.PermissionLevel;
};
