import { GuildMember, Message, User } from 'discord.js';
import { BotClient } from '../index';

export namespace YinYangPermissions {
  export enum PermisssionLevel {
    USER,
    DJ,
    MODERATOR,
    ADMIN,
    GUILD_OWNER,
    BOT_SUPPORT,
    BOT_ADMIN,
    BOT_DEVELOPER

  }

  export interface Levels {
    level: PermisssionLevel;
    name: string;
    check(user: User, bot: BotClient): boolean,
    checkMember(member: GuildMember, bot: BotClient): boolean,
  }

  export const Permissions: Levels[] = [
    {
      check: (user: User, bot: BotClient) => true,
      checkMember: (member: GuildMember) => true,
      level: PermisssionLevel.USER,
      name: 'user',
    },
    {
      check: (user: User, bot: BotClient) => user.botSupport
        ?? false as boolean,
      checkMember: (member: GuildMember, bot: BotClient) => member.user.botSupport
        ?? false as boolean,
      level: PermisssionLevel.BOT_SUPPORT,
      name: 'user',
    },
    {
      check: (user: User, bot: BotClient) => user.botAdmin
        ?? false as boolean,
      checkMember: (member: GuildMember, bot: BotClient) => member.user.botAdmin
        ?? false as boolean,
      level: PermisssionLevel.BOT_ADMIN,
      name: 'user',
    },
    {
      check: (user: User, bot: BotClient) => user.botDeveloper
        ?? false as boolean,
      checkMember: (member: GuildMember, bot: BotClient) => member.user.botDeveloper
        ?? false as boolean,
      level: PermisssionLevel.BOT_DEVELOPER,
      name: 'user',
    },
  ];
}
