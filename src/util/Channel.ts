import { TextChannel, VoiceChannel, GuildChannel, CategoryChannel, Channel, NewsChannel, DMChannel } from 'discord.js';

type channelResolvable = GuildChannel | TextChannel | VoiceChannel | CategoryChannel | Channel | NewsChannel | DMChannel | null;
export default class ChannelUtils {
  static resolveTextChannel (channel: channelResolvable) {
    if (!((channel): channel is TextChannel => channel?.type === 'text')(channel)) return;

    return channel;
  }
}
