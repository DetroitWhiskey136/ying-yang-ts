import { Guild } from 'discord.js';
import { Database, Util } from '..';

// #region Scope Declaration
declare module 'discord.js' {
  interface Guild {
    autoFormatUsernames: boolean;
    prefix: Util.Constants.stringResolvable;
    log: Util.Constants.stringResolvable;
    joinMessage: Util.Constants.stringResolvable;
    leaveMessage: Util.Constants.stringResolvable;
    welcomeChannel: Util.Constants.stringResolvable;
  }
}

Reflect.defineProperty(Guild.prototype, 'autoFormatUsernames', {
  get: function (this: Guild) {
    return this.client.bot.database.guilds.get(this.id).autoFormatUsernames ?? false;
  },
  set: function (this: Guild, value: Boolean) {
    return this.client.bot.database.guilds.update(this.id, { autoFormatUsernames: value });
  },
});

Reflect.defineProperty(Guild.prototype, 'prefix', {
  get: function (this: Guild) {
    return this.client.bot.database.guilds.get(this.id).prefix ?? '/';
  },
  set: function (this: Guild, value: Boolean) {
    return this.client.bot.database.guilds.update(this.id, { prefix: value });
  },
});

Reflect.defineProperty(Guild.prototype, 'log', {
  get: function (this: Guild) {
    return this.client.bot.database.guilds.get(this.id).log ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return this.client.bot.database.guilds.update(this.id, { log: value });
  },
});

Reflect.defineProperty(Guild.prototype, 'joinMessage', {
  get: function (this: Guild) {
    return this.client.bot.database.guilds.get(this.id).joinMessage ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return this.client.bot.database.guilds.update(this.id, { joinMessage: value }) ?? false;
  },
});

Reflect.defineProperty(Guild.prototype, 'leaveMessage', {
  get: function (this: Guild) {
    return this.client.bot.database.guilds.get(this.id).leaveMessage ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return this.client.bot.database.guilds.update(this.id, { leaveMessage: value }) ?? false;
  },
});

Reflect.defineProperty(Guild.prototype, 'welcomeChannel', {
  get: function (this: Guild) {
    return this.client.bot.database.guilds.get(this.id).welcomeChannel ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return this.client.bot.database.guilds.update(this.id, { welcomeChannel: value }) ?? false;
  },
});
