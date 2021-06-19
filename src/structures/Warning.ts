import {
  GuildMemberResolvable, GuildMember, Guild,
} from 'discord.js';
import { DiscordClient, IMemberWarning } from '../index';

export declare interface Warning {
  client: DiscordClient;
  guild: Guild
  member: GuildMember;
  id: string;
  reason: string;
  points: number;
  moderator: GuildMemberResolvable;
}

export class Warning {
  constructor(client: DiscordClient, data: IMemberWarning, member: GuildMember) {
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
