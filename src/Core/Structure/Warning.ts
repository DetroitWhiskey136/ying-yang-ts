import {
  GuildMemberResolvable, GuildMember, Guild,
} from 'discord.js';
import { Client, Database } from '..';

export declare interface Warning {
  client: Client.DiscordClient;
  guild: Guild
  member: GuildMember;
  id: string;
  reason: string;
  points: number;
  moderator: GuildMemberResolvable;
}

export class Warning {
  constructor(
    client: Client.DiscordClient,
    data: Database.Models.Member.IMemberWarning,
    member: GuildMember,
  ) {
    this.client = client;
    this.guild = member.guild;
    this.member = member;
    this.id = data.id;
    this.reason = data.reason;
    this.points = data.points;
    this.moderator = this.getMod(data.moderator);
  }

  private getMod(moderator: GuildMemberResolvable): GuildMemberResolvable {
    this.guild.members.fetch(moderator).then((mod) => {
      this.moderator = mod;
    }).catch(() => {
      this.moderator = moderator;
    });
    return this.moderator;
  }
}
