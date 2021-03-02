import {
  TextChannel, VoiceChannel, GuildChannel, CategoryChannel, Channel, NewsChannel, DMChannel,
} from 'discord.js';

type channelResolvable =
  GuildChannel | TextChannel | VoiceChannel | CategoryChannel |
  Channel | NewsChannel | DMChannel | null;

class ChannelUtil {
  static resolveTextChannel(channel: channelResolvable) {
    if (!((channel): channel is TextChannel => channel?.type === 'text')(channel)) return;

    // eslint-disable-next-line consistent-return
    return channel;
  }
}

export default ChannelUtil;
