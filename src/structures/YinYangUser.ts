import { User } from 'discord.js';
import {
  IUser, Database,
} from '../index';

declare module 'discord.js' {
  interface User extends IUser {}
}

const database = new Database();

Reflect.defineProperty(User.prototype, 'botSupport', {
  get: function (this: User) {
    return database.users.get(this.id).botSupport
      ?? database.users.update(this.id, { botSupport: false }).botSupport;
  },
  set: function (this: User, value: Boolean) {
    return database.users.update(this.id, { botSupport: value });
  },
});

Reflect.defineProperty(User.prototype, 'botAdmin', {
  get: function (this: User) {
    return database.users.get(this.id).botAdmin
      ?? database.users.update(this.id, { botAdmin: false }).botAdmin;
  },
  set: function (this: User, value: Boolean) {
    return database.users.update(this.id, { botAdmin: value }) ?? false;
  },
});

Reflect.defineProperty(User.prototype, 'botDeveloper', {
  get: function (this: User) {
    return database.users.get(this.id).botDeveloper
      ?? database.users.update(this.id, { botDeveloper: false }).botDeveloper;
  },
  set: function (this: User, value: Boolean) {
    return database.users.update(this.id, { botDeveloper: value });
  },
});

Reflect.defineProperty(User.prototype, 'level', {
  get: function (this: User) {
    return database.users.get(this.id).level
      ?? database.users.update(this.id, { level: false }).level;
  },
  set: function (this: User, value: number) {
    return database.users.update(this.id, { level: value });
  },
});
