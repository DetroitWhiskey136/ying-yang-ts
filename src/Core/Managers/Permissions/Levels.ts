import { GuildMember, User } from 'discord.js';
import { Client, Managers } from '../..';

export interface Levels {
  level: Managers.Permissions.PermissionLevel;
  name: string;
  check(user: User, bot: Client.BotClient): boolean;
  checkMember(member: GuildMember, bot: Client.BotClient): boolean;
}
