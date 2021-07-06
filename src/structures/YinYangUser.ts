import { Structures } from 'discord.js';
import {
  DiscordClient, numberResolvable, IUser,
} from '../index';

// #region Scope Declaration
declare module 'discord.js' {
    interface User extends IUser{
        level: numberResolvable;

        setBotAdmin(value: boolean): Promise<this>;

        setBotSupport(value: boolean): Promise<this>;

        setLevel(value: number): Promise<this>;
    }
}
// #endregion

export default Structures.extend('User', (User) => {
  class YinYangUser extends User {
    // #region Constructor
    constructor(client: DiscordClient, data: object) {
      super(client, data);
      this.init();
      this.botAdmin = client.bot.database.users.get(this.id).botAdmin ?? false;
      this.botDeveloper = client.bot.database.users.get(this.id).botDeveloper ?? false;
      this.botSupport = client.bot.database.users.get(this.id).botSupport ?? false;
      this.level = client.bot.database.users.get(this.id).level;
    }
    // #endregion

    // #region Methods
    private init() {
      const options = {
        botAdmin: false,
        botSupport: false,
        level: 0,
      };

      this.client.bot.database.users.ensure(this.id, options);
    }

    async setBotAdmin(value: boolean) {
      await this.client.bot.database.users.update(
        this.id,
        { botAdmin: value },
      );
      this.botAdmin = this.client.bot.database.users.get(this.id)?.botAdmin;
      return this;
    }

    async setBotDeveloper(value: boolean) {
      await this.client.bot.database.users.update(
        this.id,
        { botDeveloper: value },
      );
      this.botDeveloper = this.client.bot.database.users.get(this.id)?.botDeveloper;
      return this;
    }

    async setBotSupport(value: boolean) {
      await this.client.bot.database.users.update(
        this.id,
        { botSupport: value },
      );
      this.botSupport = this.client.bot.database.users.get(this.id)?.botSupport;
      return this;
    }

    async setLevel(value: number) {
      await this.client.bot.database.users.update(
        this.id,
        { level: value },
      );
      this.level = this.client.bot.database.users.get(this.id)?.level;
      return this;
    }

    // #endregion
  }

  return YinYangUser;
});
