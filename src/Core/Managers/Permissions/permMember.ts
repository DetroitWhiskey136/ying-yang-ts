import { GuildMember } from 'discord.js';
import { Client, Managers } from '../..';
/**
 * Gets the permission level of a member.
 * @param member The member.
 * @param bot the bot.
 * @returns {PermissionLevel} the highest level of the member.
 */
export function permMember(member: GuildMember, bot: Client.BotClient) {
  let permlvl = Managers.Permissions.PermissionLevel.USER;

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
