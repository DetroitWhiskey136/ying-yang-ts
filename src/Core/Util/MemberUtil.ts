import {
  GuildMemberResolvable,
  MessageMentions,
  Guild,
  Snowflake,
} from 'discord.js';

export class MemberUtil {
  static parseMemberFromID(id: Snowflake, guild: Guild) {
    return guild.members.resolve(id);
  }

  static parseMemberFromMention(mention: MessageMentions, guild: Guild) {
    const id: GuildMemberResolvable | undefined = mention.members?.first?.()?.id;
    return !id ? undefined : guild.members.resolve(id!);
  }

  static parseMember(exp: string, guild: Guild) {}
}
