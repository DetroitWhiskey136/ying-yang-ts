import { GuildMember, User } from 'discord.js';
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
    BOT_DEVELOPER,
  }

  export interface Levels {
    level: PermisssionLevel;
    name: string;
    check(user: User, bot: BotClient): boolean;
    checkMember(member: GuildMember, bot: BotClient): boolean;
  }

  export const Permissions: Levels[] = [
    {
      check: (user: User, bot: BotClient) => true,
      checkMember: (member: GuildMember) => true,
      level: PermisssionLevel.USER,
      name: 'user',
    },
    {
      check: (user: User, bot: BotClient) => false,
      checkMember: (member: GuildMember, bot: BotClient) => member.dj
        ?? false,
      level: PermisssionLevel.DJ,
      name: 'dj',
    },
    {
      check: (user: User, bot: BotClient) => user.botSupport
        ?? false,
      checkMember: (member: GuildMember, bot: BotClient) => member.user.botSupport
        ?? false,
      level: PermisssionLevel.BOT_SUPPORT,
      name: 'bot_support',
    },
    {
      check: (user: User, bot: BotClient) => user.botAdmin
        ?? false,
      checkMember: (member: GuildMember, bot: BotClient) => member.user.botAdmin
        ?? false,
      level: PermisssionLevel.BOT_ADMIN,
      name: 'bot_admin',
    },
    {
      check: (user: User, bot: BotClient) => user.botDeveloper
        ?? false,
      checkMember: (member: GuildMember, bot: BotClient) => member.user.botDeveloper
        ?? false,
      level: PermisssionLevel.BOT_DEVELOPER,
      name: 'bot_developer',
    },
  ];

  /**
   * Gets the permission level of a user.
   * @param user the user.
   * @param bot the bot.
   * @returns {PermisssionLevel} the highest level of the user.
   */
  export function permUser(user: User, bot: BotClient) {
    let permlvl = PermisssionLevel.USER;

    const permOrder = bot.perms
      .slice(0)
      .sort((p, c) => (p.level < c.level ? 1 : -1));

    while (permOrder.length) {
      const currentLevel = permOrder.shift();
      if (currentLevel?.check(user, bot)) {
        permlvl = currentLevel.level;
        break;
      }
    }

    return permlvl;
  }

  /**
   * Gets the permission level of a member.
   * @param member The member.
   * @param bot the bot.
   * @returns {PermisssionLevel} the highest level of the member.
   */
  export function permMember(member: GuildMember, bot: BotClient) {
    let permlvl = PermisssionLevel.USER;

    const permOrder = bot.perms
      .slice(0)
      .sort((p, c) => (p.level < c.level ? 1 : -1));

    while (permOrder.length) {
      const currentLevel = permOrder.shift();
      if (currentLevel?.checkMember(member, bot)) {
        permlvl = currentLevel.level;
        break;
      }
    }

    return permlvl;
  }
}
