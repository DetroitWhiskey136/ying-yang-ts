import { Structures } from 'discord.js';
import { DiscordClient } from 'src/client';
import { numberResolvable, booleanResolvable } from 'src/util/Constants';

declare module 'discord.js' {
  interface User {
    botAdmin: booleanResolvable;
    botSupport: booleanResolvable;
    level: numberResolvable;
  }
}

export default Structures.extend('User', (User) => {
  class YinYangUser extends User {
    botAdmin: booleanResolvable;

    botSupport: booleanResolvable;

    level: numberResolvable;

    constructor(client: DiscordClient, data: object) {
      super(client, data);
      this.init();
      this.botAdmin = client.bot.database.users.model.get(this.id)?.botAdmin;
      this.botSupport = client.bot.database.users.model.get(this.id)?.botSupport;
      this.level = client.bot.database.users.model.get(this.id)?.level;
    }

    async init() {
      await this.client.bot.database.users.model.ensure(
        this.id,
        {
          botAdmin: false,
          botSupport: false,
          level: 0,
        },
      );
    }

    async setBotAdmin(value: boolean) {
      await this.client.bot.database.users.model.update(
        this.id,
        {
          botAdmin: value,
        },
      );
      const data = await
      this.client.bot.database.users.model.get(this.id)?.botAdmin;
      this.botAdmin = data;
      return data;
    }

    async setBotSupport(value: boolean) {
      await this.client.bot.database.users.model.update(
        this.id,
        {
          botSupport: value,
        },
      );
      const data = await
      this.client.bot.database.users.model.get(this.id)?.botSupport;
      this.botSupport = data;
      return data;
    }

    async setLevel(value: number) {
      await this.client.bot.database.users.model.update(
        this.id,
        {
          level: value,
        },
      );
      const data = await
      this.client.bot.database.users.model.get(this.id)?.level;
      this.level = data;
      return data;
    }
  }
  return YinYangUser;
});
