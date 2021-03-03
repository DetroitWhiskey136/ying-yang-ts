import { GuildMember, Guild, Client } from 'discord.js';
import { MemberWarning } from 'src/database';
import { DiscordClient } from '../client/DiscordClient';

export declare interface Warning {
  client: DiscordClient | Client;
  guild: Guild
  member: GuildMember;
  id: string;
  reason: string;
  points: number;
  moderator: GuildMember | string;
}

export class Warning {
  // #region Constructor
  constructor(client: DiscordClient | Client, data: MemberWarning, member: GuildMember) {
    this.client = client;
    this.guild = member.guild;
    this.member = member;
    this.id = data.id;
    this.reason = data.reason;
    this.points = data.points;
    this.moderator = this.getMod(data.moderator);
  }
  // #endregion

  // #region Methods
  private getMod(moderator: string): GuildMember | string {
    this.guild.members.fetch(moderator).then((mod) => {
      this.moderator = mod;
    }).catch(() => {
      this.moderator = moderator;
    });
    return this.moderator;
  }
  // #endregion
}
