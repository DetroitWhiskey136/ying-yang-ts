import { Structures, TextChannel } from 'discord.js';
import { DiscordClient } from 'src/client';
import { stringResolvable } from 'src/util/Constants';

declare module 'discord.js' {
  interface Guild {
    prefix: stringResolvable;
    log: stringResolvable;
    joinMessage: stringResolvable;
    leaveMessage: stringResolvable;
    welcomeChannel: stringResolvable;
  }
}

export default Structures.extend('Guild', (Guild) => {
  class YinYangGuild extends Guild {
    prefix: stringResolvable;

    log: stringResolvable;

    joinMessage: stringResolvable;

    leaveMessage: stringResolvable;

    welcomeChannel: stringResolvable;

    constructor(client: DiscordClient, data: any) {
      super(client, data);
      this.init();

      this.prefix = client.bot.database.guilds.model.get(this.id)?.prefix;
      this.log = client.bot.database.guilds.model.get(this.id)?.log;
      this.joinMessage = client.bot.database.guilds.model.get(this.id)?.joinMessage;
      this.leaveMessage = client.bot.database.guilds.model.get(this.id)?.leaveMessage;
      this.welcomeChannel = client.bot.database.guilds.model.get(this.id)?.welcomeChannel;
    }

    async init() {
      const options = {
        prefix: '/',
        log: null,
        joinMessage: null,
        leaveMessage: null,
        welcomeChannel: null,
      };

      await this.client.bot.database.guilds.model.ensure(this.id, options);
    }

    async setPrefix(value: string) {
      await this.client.bot.database.guilds.model.update(this.id, { prefix: value });
      const data = await
      this.client.bot.database.guilds.model.get(this.id)?.prefix;
      this.prefix = data;
      return data;
    }

    async setLog(value: string) {
      await this.client.bot.database.guilds.model.update(this.id, { log: value });
      const data = await
      this.client.bot.database.guilds.model.get(this.id)?.log;
      this.log = data;
      return data;
    }

    async setJoinMessage(value: string) {
      await this.client.bot.database.guilds.model.update(this.id, { joinMessage: value });
      const data = await
      this.client.bot.database.guilds.model.get(this.id)?.joinMessage;
      this.joinMessage = data;
      return data;
    }

    async setLeaveMessage(value: string) {
      await this.client.bot.database.guilds.model.update(this.id, { leaveMessage: value });
      const data = await
      this.client.bot.database.guilds.model.get(this.id)?.leaveMessage;
      this.leaveMessage = data;
      return data;
    }

    async setWelcomeChannel(value: TextChannel) {
      await this.client.bot.database.guilds.model.update(this.id, { welcomeChannel: value.id });
      const data = await
      this.client.bot.database.guilds.model.get(this.id)?.welcomeChannel;
      this.welcomeChannel = data;
      return data;
    }
  }

  return YinYangGuild;
});