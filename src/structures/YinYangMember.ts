import { GuildMember } from 'discord.js';
import { WarningManager, Database } from '../index';

// #region Scope Declaration
declare module 'discord.js' {
  interface GuildMember {
    warnings: WarningManager;
    dj: boolean;
    level: number;
  }
}
// #endregion

const database = new Database();

Reflect.defineProperty(GuildMember.prototype, 'warnings', {
  get: function (this: GuildMember) {
    return new WarningManager(this);
  },
});

Reflect.defineProperty(GuildMember.prototype, 'dj', {
  get: function (this: GuildMember) {
    return database.members.get(this.id).guilds[this.guild.id].dj;
  },
  set: function (this: GuildMember, value: boolean) {
    const options = {
      guilds: {
        [this.guild.id]: {
          dj: value,
        },
      },
    };
    return database.members.update(this.id, options);
  },
});

Reflect.defineProperty(GuildMember.prototype, 'level', {
  get: function (this: GuildMember) {
    return database.members.get(this.id).guilds[this.guild.id].level;
  },
  set: function (this: GuildMember, value: boolean) {
    const options = {
      guilds: {
        [this.guild.id]: {
          level: value,
        },
      },
    };
    return database.members.update(this.id, options);
  },
});
