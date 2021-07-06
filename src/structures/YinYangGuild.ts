import { Guild } from 'discord.js';
import { stringResolvable, Database } from '../index';

// #region Scope Declaration
declare module 'discord.js' {
  interface Guild {
    autoFormatUsernames: boolean;
    prefix: stringResolvable;
    log: stringResolvable;
    joinMessage: stringResolvable;
    leaveMessage: stringResolvable;
    welcomeChannel: stringResolvable;
  }
}

const database = new Database();

Reflect.defineProperty(Guild.prototype, 'autoFormatUsernames', {
  get: function (this: Guild) {
    return database.guilds.get(this.id).autoFormatUsernames ?? false;
  },
  set: function (this: Guild, value: Boolean) {
    return database.guilds.update(this.id, { autoFormatUsernames: value });
  },
});

Reflect.defineProperty(Guild.prototype, 'prefix', {
  get: function (this: Guild) {
    return database.guilds.get(this.id).prefix ?? '/';
  },
  set: function (this: Guild, value: Boolean) {
    return database.guilds.update(this.id, { prefix: value });
  },
});

Reflect.defineProperty(Guild.prototype, 'log', {
  get: function (this: Guild) {
    return database.guilds.get(this.id).log ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return database.guilds.update(this.id, { log: value });
  },
});

Reflect.defineProperty(Guild.prototype, 'joinMessage', {
  get: function (this: Guild) {
    return database.guilds.get(this.id).joinMessage ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return database.guilds.update(this.id, { joinMessage: value }) ?? false;
  },
});

Reflect.defineProperty(Guild.prototype, 'leaveMessage', {
  get: function (this: Guild) {
    return database.guilds.get(this.id).leaveMessage ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return database.guilds.update(this.id, { leaveMessage: value }) ?? false;
  },
});

Reflect.defineProperty(Guild.prototype, 'welcomeChannel', {
  get: function (this: Guild) {
    return database.guilds.get(this.id).welcomeChannel ?? '';
  },
  set: function (this: Guild, value: Boolean) {
    return database.guilds.update(this.id, { welcomeChannel: value }) ?? false;
  },
});
