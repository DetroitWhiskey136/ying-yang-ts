import { GuildMember } from 'discord.js';
import { Database, Managers } from '..';

// #region Scope Declaration
declare module 'discord.js' {
  interface GuildMember extends Database.Models.Member.IMemberGuild {}
}
// #endregion

Reflect.defineProperty(GuildMember.prototype, 'warnings', {
  get: function (this: GuildMember) {
    return new Managers.WarningManager(this);
  },
});

Reflect.defineProperty(GuildMember.prototype, 'dj', {
  get: function (this: GuildMember) {
    return this.client.bot.database.members.get(this.id).guilds[this.guild.id].dj;
  },
  set: function (this: GuildMember, value: boolean) {
    const options = {
      guilds: {
        [this.guild.id]: {
          dj: value,
        },
      },
    };
    this.client.bot.database.members.update(this.id, options);
    return this.client.bot.database.members.get(this.id).guilds[this.guild.id].dj;
  },
});

Reflect.defineProperty(GuildMember.prototype, 'level', {
  get: function (this: GuildMember) {
    return this.client.bot.database.members.get(this.id).guilds[this.guild.id].level;
  },
  set: function (this: GuildMember, value: boolean) {
    const options = {
      guilds: {
        [this.guild.id]: {
          level: value,
        },
      },
    };
    this.client.bot.database.members.update(this.id, options);
    return this.client.bot.database.members.get(this.id).guilds[this.guild.id].level;
  },
});
