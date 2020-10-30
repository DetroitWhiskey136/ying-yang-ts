import { Structures, Guild } from 'discord.js';
import { GuildMemberWarningManager } from 'src/managers';
import { DiscordClient } from '../client';

declare module 'discord.js' {
  interface GuildMember {
    warnings: GuildMemberWarningManager;
  }
}

export default Structures.extend('GuildMember', (GuildMember) => {
  class YinYangMember extends GuildMember {
    warnings: GuildMemberWarningManager;

    constructor(client: DiscordClient, data: object, guild: Guild) {
      super(client, data, guild);
      this.init();

      this.warnings = new GuildMemberWarningManager(this);
    }

    private async init() {
      const { id } = this.guild;
      const options = {
        guilds: {
          [id]: {
            warnings: [],
            dj: false,
            level: 0,
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

    // member.warnings.add (requires a class)
    // member.addWarnings (member methods)
  }
  return YinYangMember;
});
