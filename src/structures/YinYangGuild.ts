import { Structures, TextChannel } from 'discord.js';
import { DiscordClient, stringResolvable } from '../index';

// #region Scope Declaration
declare module 'discord.js' {
  interface Guild {
    autoFormatUsernames: boolean;
    prefix: stringResolvable;
    log: stringResolvable;
    joinMessage: stringResolvable;
    leaveMessage: stringResolvable;
    welcomeChannel: stringResolvable;
    setPrefix(value: string): Promise<stringResolvable>;
    setLog(value: string): Promise<stringResolvable>;
    setJoinMessage(value: string): Promise<stringResolvable>;
    setLeaveMessage(value: string): Promise<stringResolvable>;
    setWelcomeChannel(value: TextChannel): Promise<stringResolvable>;
  }
}
// #endregion

export default Structures.extend('Guild', (Guild) => {
  class YinYangGuild extends Guild {
    // #region Constructor
    constructor(client: DiscordClient, data: any) {
      super(client, data);
      this.init()
        .then(() => {
          this.autoFormatUsernames = client.bot.database.guilds.get(this.id).autoFormatUsernames;
          this.prefix = client.bot.database.guilds.get(this.id).prefix;
          this.log = client.bot.database.guilds.get(this.id).log;
          this.joinMessage = client.bot.database.guilds.get(this.id).joinMessage;
          this.leaveMessage = client.bot.database.guilds.get(this.id).leaveMessage;
          this.welcomeChannel = client.bot.database.guilds.get(this.id).welcomeChannel;
        })
        .catch();
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

    async setAutoFormatUsernames(value: boolean) {
      await this.client.bot.database.guilds.update(this.id, { autoFormatUsernames: value });
      const data = await
      this.client.bot.database.guilds.get(this.id)?.autoFormatUsernames;
      this.autoFormatUsernames = data;
      return data;
    }
    // #endregion
  }

  return YinYangGuild;
});
