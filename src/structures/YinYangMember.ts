import { Structures, Guild } from 'discord.js';
import { GuildMemberWarningManager, DiscordClient } from '../index';

// #region Scope Declaration
declare module 'discord.js' {
  interface GuildMember {
    warnings: GuildMemberWarningManager;
    dj: boolean;
    level: number;
    addLevel(): Promise<void>;
  }
}
// #endregion

export default Structures.extend('GuildMember', (GuildMember) => {
  class YinYangMember extends GuildMember {
    // #region Constructor
    constructor(client: DiscordClient, data: object, guild: Guild) {
      super(client, data, guild);
      this.warnings = new GuildMemberWarningManager(this);
      this.init()
        .then(() => {
          this.dj = client.bot.database.members.get(this.id).guilds[guild.id].dj;
          this.level = client.bot.database.members.get(this.id).guilds[guild.id].level;
        })
        .catch();
    }
    // #endregion

    // #region Methods
    private async init() {
      const { id } = this.guild;
      const options = {
        guilds: {
          [id]: {
            dj: false,
            level: 0,
            warnings: [],
          },
        },
      };

      const member = this.client.bot.database.members.model.get(this.id);

      if (!member) {
        await this.client.bot.database.members.ensure(this.id, options);
      } else if (!member.guilds[id]) {
        await this.client.bot.database.members.update(this.id, options);
      }
    }

    public async addLevel() {
      await this.client.bot.database.members.model.inc(this.id, `guilds.${this.guild.id}.level`);
      return this.init();
    }
    // #endregion
  }
  return YinYangMember;
});
