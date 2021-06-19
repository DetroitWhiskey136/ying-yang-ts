import { Structures } from 'discord.js';
import { booleanResolvable, DiscordClient, numberResolvable } from '../index';

// #region Scope Declaration
declare module 'discord.js' {
  interface User {
    botAdmin: booleanResolvable;
    botSupport: booleanResolvable;
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
      this.init()
        .then(() => {
          this.botAdmin = client.bot.database.users.get(this.id).botAdmin;
          this.botSupport = client.bot.database.users.get(this.id).botSupport;
          this.level = client.bot.database.users.get(this.id).level;
        })
        .catch();
    }
    // #endregion

    // #region Methods
    async init() {
      const options = {
        botAdmin: false,
        botSupport: false,
        level: 0,
      };

      await this.client.bot.database.users.ensure(this.id, options);
    }

    async setBotAdmin(value: boolean) {
      await this.client.bot.database.users.update(
        this.id,
        { botAdmin: value },
      );
      this.botAdmin = await this.client.bot.database.users.get(this.id)?.botAdmin;
      return this;
    }

    async setBotSupport(value: boolean) {
      await this.client.bot.database.users.update(
        this.id,
        { botSupport: value },
      );
      this.botSupport = await this.client.bot.database.users.get(this.id)?.botSupport;
      return this;
    }

    async setLevel(value: number) {
      await this.client.bot.database.users.update(
        this.id,
        { level: value },
      );
      this.level = await this.client.bot.database.users.get(this.id)?.level;
      return this;
    }
    // #endregion
  }
  return YinYangUser;
});
