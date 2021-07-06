import { GuildMember, Message } from 'discord.js';
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
    check(message: Message, bot: BotClient): boolean,
    checkMember(member: GuildMember, bot: BotClient): boolean,
  }

  export const Permissions: Levels[] = [
    {
      check: (message: Message, bot: BotClient) => true,
      checkMember: (member: GuildMember, bot: BotClient) => true,
      level: PermisssionLevel.USER,
      name: 'user',
    },
    {
      check: (message: Message, bot: BotClient) => message.author.botAdmin as boolean,
      checkMember: (member: GuildMember, bot: BotClient) => member.user.botAdmin as boolean,
      level: PermisssionLevel.BOT_ADMIN,
      name: 'user',
    },
  ];
}
