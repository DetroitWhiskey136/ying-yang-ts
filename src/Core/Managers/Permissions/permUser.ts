import { User } from 'discord.js';
import { Client, Managers } from '../..';

/**
 * Gets the permission level of a user.
 * @param user the user.
 * @param bot the bot.
 * @returns {PermissionLevel} the highest level of the user.
 */
export function permUser(user: User, bot: Client.BotClient) {
  let permlvl = Managers.Permissions.PermissionLevel.USER;

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
