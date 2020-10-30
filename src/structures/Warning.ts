import { GuildMember, Guild } from 'discord.js';
import { MemberWarning } from 'src/database';
import { DiscordClient } from '../client';

class Warning {
  // #region Type Declarations
  client: DiscordClient;

  guild: Guild

  member: GuildMember;

  id: string;

  reason: string;

  points: number;

  moderator: GuildMember | undefined | string;
  // #endregion

  // #region Constructor
  constructor(client: DiscordClient, data: MemberWarning, member: GuildMember) {
    this.client = client;
    this.guild = member.guild;
    this.member = member;
    this.id = data.id;
    this.reason = data.reason;
    this.points = data.points;
    this.moderator = undefined;
    this.getMod(data.moderator);
  }
  // #endregion

  // #region Methods
  private getMod(moderator: string) {
    this.guild.members.fetch(moderator).then((mod) => {
      this.moderator = mod;
    }).catch(() => {
      this.moderator = moderator;
    });
  }
  // #endregion
}

export default Warning;
