import { User } from 'discord.js';
import {
  IUser, Database,
} from '../index';

declare module 'discord.js' {
  interface User extends IUser {
  }
}

const database = new Database();

Reflect.defineProperty(User.prototype, 'botSupport', {
  get: function (this: User) {
    return database.users.get(this.id).botSupport ?? false;
  },
  set: function (this: User, value: Boolean) {
    return database.users.update(this.id, { botSupport: value }) ?? false;
  },
});

Reflect.defineProperty(User.prototype, 'botAdmin', {
  get: function (this: User) {
    return database.users.get(this.id).botAdmin ?? false;
  },
  set: function (this: User, value: Boolean) {
    return database.users.update(this.id, { botAdmin: value }) ?? false;
  },
});

Reflect.defineProperty(User.prototype, 'botDeveloper', {
  get: function (this: User) {
    return database.users.get(this.id).botDeveloper ?? false;
  },
  set: function (this: User, value: Boolean) {
    return database.users.update(this.id, { botDeveloper: value }) ?? false;
  },
});

Reflect.defineProperty(User.prototype, 'level', {
  get: function (this: User) {
    return database.users.get(this.id).level ?? false;
  },
  set: function (this: User, value: number) {
    return database.users.update(this.id, { level: value }) ?? false;
  },
});
