import { Structures } from 'discord.js';
import { DiscordClient } from '../client';
import { numberResolvable, booleanResolvable } from '../util/Constants';

// #region Scope Declaration
declare module 'discord.js' {
  interface User {
    botAdmin: booleanResolvable;
    botSupport: booleanResolvable;
    level: numberResolvable;
  }
}
// #endregion
export default Structures.extend('User', (User) => {
  class YinYangUser extends User {
    // #region Type Declarations
    botAdmin: booleanResolvable;

    botSupport: booleanResolvable;

    level: numberResolvable;
    // #endregion

    // #region Constructor
    constructor(client: DiscordClient, data: object) {
      super(client, data);
      this.init();
      this.botAdmin = client.bot.database.users.get(this.id)?.botAdmin;
      this.botSupport = client.bot.database.users.get(this.id)?.botSupport;
      this.level = client.bot.database.users.get(this.id)?.level;
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
      const data = await
      this.client.bot.database.users.get(this.id)?.botAdmin;
      this.botAdmin = data;
      return this;
    }

    async setBotSupport(value: boolean) {
      await this.client.bot.database.users.update(
        this.id,
        { botSupport: value },
      );
      const data = await
      this.client.bot.database.users.get(this.id)?.botSupport;
      this.botSupport = data;
      return data;
    }

    async setLevel(value: number) {
      await this.client.bot.database.users.update(
        this.id,
        { level: value },
      );
      const data = await
      this.client.bot.database.users.get(this.id)?.level;
      this.level = data;
      return data;
    }
    // #endregion
  }
  return YinYangUser;
});
