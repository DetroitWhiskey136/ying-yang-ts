import { MessageMentions, Guild } from 'discord.js';
import { BotClient } from '../index';

export class MemberUtil {
  static parseMemberFromID(id: string, guild: Guild) {
    return guild.members.resolve(id);
  }

  static parseMemberFromMention(mention: MessageMentions, guild: Guild) {
  }

  static parseMember(exp: string, guild: Guild) {
  }
}
