import { Message } from 'discord.js';
import { BotClient } from '../client/BotClient';
import { YinYangCommand } from '../handlers/Command';

export namespace YinYangPermissions {
  export enum PermissionLevels { // loop backwards until it reaches zero
    USER,
    DJ,
    SUPPORT,
    MODERATOR,
    ADMIN,
    GUILD_OWNER, // 6, loop back until 0 to hit all perms before it
    BOT_DEVELOPER,
    BOT_SUPPORT,
    BOT_OWNER,
  }

  export function getPermLevel(ctx: YinYangCommand.CommandContext) {
    const userPerm = ctx.member.perms;
    const keys = Object.keys(PermissionLevels).filter(k => typeof PermissionLevels[k as any] === 'number');
    const keys.filter((perm) => userPerm.has(perm))

    switch (+PermissionLevels) {
      case PermissionLevels.DJ:
        ctx.bot.database.members.
        // if (!perm) break;
      case PermissionLevels.SUPPORT:
        //
      case PermissionLevels.MODERATOR:
        //
      case PermissionLevels.ADMIN:
        //
      case PermissionLevels.GUILD_OWNER:
        //
      case PermissionLevels.BOT_DEVELOPER: // what is this switch case for
        //
      case PermissionLevels.BOT_SUPPORT:
        //
      case PermissionLevels.BOT_OWNER:
        //
        break;
      default:
        PermissionLevels.USER;
        break;
    }
  }
}
