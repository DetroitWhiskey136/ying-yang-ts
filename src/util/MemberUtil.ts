import { BotClient } from '@client/index';
import { MessageMentions, Guild } from 'discord.js';

class MemberUtil {
  static parseMemberFromID(id: string, guild: Guild) {
    return guild.members.resolve(id);
  }

  static parseMemberFromMention(mention: MessageMentions, guild: Guild) {
  }

  static parseMember(exp: string, guild: Guild) {
  }
}

export default MemberUtil;
