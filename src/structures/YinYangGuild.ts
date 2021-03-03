import { stringResolvable } from '@util/Constants';
import { Structures, TextChannel } from 'discord.js';
import { DiscordClient } from '../client';
import YinYangMember from './YinYangMember';

// #region Scope Declaration
declare module 'discord.js' {
  interface Guild {
    prefix: stringResolvable;
    log: stringResolvable;
    joinMessage: stringResolvable;
    leaveMessage: stringResolvable;
    welcomeChannel: stringResolvable;
  }
}
// #endregion

export default Structures.extend('Guild', (Guild) => {
  class YinYangGuild extends Guild {
    // #region Constructor
    constructor(client: DiscordClient, data: any) {
      super(client, data);
      this.init();

      this.prefix = client.bot.database.guilds.get(this.id).prefix;
      this.log = client.bot.database.guilds.get(this.id).log;
      this.joinMessage = client.bot.database.guilds.get(this.id).joinMessage;
      this.leaveMessage = client.bot.database.guilds.get(this.id).leaveMessage;
      this.welcomeChannel = client.bot.database.guilds.get(this.id).welcomeChannel;
    }
    // #endregion

    // #region Methods
    async init() {
      const options = {
        joinMessage: null,
        leaveMessage: null,
        log: null,
        prefix: '/',
        welcomeChannel: null,
      };

      await this.client.bot.database.guilds.ensure(this.id, options);
    }

    async setPrefix(value: string) {
      await this.client.bot.database.guilds.update(this.id, { prefix: value });
      const data = await
      this.client.bot.database.guilds.get(this.id)?.prefix;
      this.prefix = data;
      return data;
    }

    async setLog(value: string) {
      await this.client.bot.database.guilds.update(this.id, { log: value });
      const data = await
      this.client.bot.database.guilds.get(this.id)?.log;
      this.log = data;
      return data;
    }

    async setJoinMessage(value: string) {
      await this.client.bot.database.guilds.update(this.id, { joinMessage: value });
      const data = await
      this.client.bot.database.guilds.get(this.id)?.joinMessage;
      this.joinMessage = data;
      return data;
    }

    async setLeaveMessage(value: string) {
      await this.client.bot.database.guilds.update(this.id, { leaveMessage: value });
      const data = await
      this.client.bot.database.guilds.get(this.id)?.leaveMessage;
      this.leaveMessage = data;
      return data;
    }

    async setWelcomeChannel(value: TextChannel) {
      await this.client.bot.database.guilds.update(this.id, { welcomeChannel: value.id });
      const data = await
      this.client.bot.database.guilds.get(this.id)?.welcomeChannel;
      this.welcomeChannel = data;
      return data;
    }
    // #endregion
  }

  return YinYangGuild;
});
