import { User } from 'discord.js';
import { Database } from '..';

declare module 'discord.js' {
  interface User extends Database.Models.User.IUser {}
}

Reflect.defineProperty(User.prototype, 'botSupport', {
  get: function (this: User) {
    return this.client.bot.database.users.get(this.id).botSupport
      ?? this.client.bot.database.users.update(this.id, { botSupport: false }).botSupport;
  },
  set: function (this: User, value: Boolean) {
    return this.client.bot.database.users.update(this.id, { botSupport: value });
  },
});

Reflect.defineProperty(User.prototype, 'botAdmin', {
  get: function (this: User) {
    return this.client.bot.database.users.get(this.id).botAdmin
      ?? this.client.bot.database.users.update(this.id, { botAdmin: false }).botAdmin;
  },
  set: function (this: User, value: Boolean) {
    return this.client.bot.database.users.update(this.id, { botAdmin: value }) ?? false;
  },
});

Reflect.defineProperty(User.prototype, 'botDeveloper', {
  get: function (this: User) {
    return this.client.bot.database.users.get(this.id).botDeveloper
      ?? this.client.bot.database.users.update(this.id, { botDeveloper: false }).botDeveloper;
  },
  set: function (this: User, value: Boolean) {
    return this.client.bot.database.users.update(this.id, { botDeveloper: value });
  },
});

Reflect.defineProperty(User.prototype, 'level', {
  get: function (this: User) {
    return this.client.bot.database.users.get(this.id).level
      ?? this.client.bot.database.users.update(this.id, { level: false }).level;
  },
  set: function (this: User, value: number) {
    return this.client.bot.database.users.update(this.id, { level: value });
  },
});
