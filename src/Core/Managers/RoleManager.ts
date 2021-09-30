import {
  Guild, RoleResolvable, Snowflake,
} from 'discord.js';
import { Client, Database } from '..';

export interface RoleManager extends Database.Models.Guild.IRoles {
  // base
  bot: Client.BotClient
  guild: Guild;
}

export class RoleManager {
  constructor(bot: Client.BotClient, guild: Guild) {
    this.guild = guild;
    this.bot = bot;
    this.init(bot.database, guild);
  }

  private init(database: Database.ConnectionBridge, guild: Guild) {
    const { roles } = database.guilds.get(guild.id);
    this.admin = this.getRole(roles.admin);
    this.moderator = this.getRole(roles.moderator);
    this.support = this.getRole(roles.support);
    this.dj = this.getRole(roles.dj);
  }

  private getRole(roleID: RoleResolvable): RoleResolvable {
    return this.guild.roles.cache.get(roleID as Snowflake) ?? '' as RoleResolvable;
  }

  public add(roleName: string, roleID: string) {
    if (this.getRole(roleID as RoleResolvable) === null) return;
    this.bot.database.guilds.update(`roles.${roleName}`, roleID);
  }

  public delete(roleName: string) {
    this.bot.database.guilds.update(`roles.${roleName}`, '');
  }
}
