import {
  Guild, RoleResolvable, Snowflake,
} from 'discord.js';
import { BotClient, Database, IRoles } from '../index';

export interface RoleManager extends IRoles {
  // base
  bot: BotClient
  guild: Guild;
}

export class RoleManager {
  constructor(bot: BotClient, guild: Guild) {
    this.guild = guild;
    this.bot = bot;
    this.init(bot.database, guild);
  }

  private init(database: Database, guild: Guild) {
    const { roles } = database.guilds.get(guild.id);
    this.admin = this.getRole(roles.admin);
    this.moderator = this.getRole(roles.moderator);
    this.support = this.getRole(roles.support);
    this.dj = this.getRole(roles.dj);
  }

  private getRole(roleID: RoleResolvable): RoleResolvable {
    return this.guild.roles.cache.get(roleID as Snowflake) ?? '';
  }

  public add(roleName: string, roleID: string) {
    if (this.getRole(roleID) === null) return;
    this.bot.database.guilds.update(`roles.${roleName}`, roleID);
  }

  public delete(roleName: string) {
    this.bot.database.guilds.update(`roles.${roleName}`, '');
  }
}
