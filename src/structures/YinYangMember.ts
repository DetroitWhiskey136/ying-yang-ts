import { Structures, Guild } from 'discord.js';
import { GuildMemberWarningManager } from 'src/managers';
import { DiscordClient } from '../client';

// #region Scope Declaration
declare module 'discord.js' {
  interface GuildMember {
    warnings: GuildMemberWarningManager;
  }
}
// #endregion

export default Structures.extend('GuildMember', (GuildMember) => {
  class YinYangMember extends GuildMember {
    // #region Constructor
    constructor(client: DiscordClient, data: object, guild: Guild) {
      super(client, data, guild);
      this.warnings = new GuildMemberWarningManager(this);
      this.init();
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
    // #endregion
  }
  return YinYangMember;
});
