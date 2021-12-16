import { GuildMember, User } from 'discord.js';
import { Client, Managers } from '../..';
import { PermissionLevel } from './PermissionLevel';

export const Permission: Managers.Permissions.Levels[] = [
  {
    check: (user: User, bot: Client.BotClient) => true,
    checkMember: (member: GuildMember) => true,
    level: PermissionLevel.USER,
    name: 'user',
  },
  {
    check: (user: User, bot: Client.BotClient) => false,
    checkMember: (member: GuildMember, bot: Client.BotClient) => member.dj ?? false,
    level: PermissionLevel.DJ,
    name: 'dj',
  },
  {
    check: (user: User, bot: Client.BotClient) => user.botSupport ?? false,
    checkMember: (member: GuildMember, bot: Client.BotClient) => member.user.botSupport ?? false,
    level: PermissionLevel.BOT_SUPPORT,
    name: 'bot_support',
  },
  {
    check: (user: User, bot: Client.BotClient) => user.botAdmin ?? false,
    checkMember: (member: GuildMember, bot: Client.BotClient) => member.user.botAdmin ?? false,
    level: PermissionLevel.BOT_ADMIN,
    name: 'bot_admin',
  },
  {
    check: (user: User, bot: Client.BotClient) => user.botDeveloper ?? false,
    checkMember: (member: GuildMember, bot: Client.BotClient) => member.user.botDeveloper ?? false,
    level: PermissionLevel.BOT_DEVELOPER,
    name: 'bot_developer',
  },
];
