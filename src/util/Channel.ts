import {
  TextChannel, VoiceChannel, GuildChannel, CategoryChannel,
  NewsChannel, DMChannel, StoreChannel,
} from 'discord.js';

export class ChannelUtil {
  static resolveTextChannel(channel: GuildChannel) {
    return ((channel): channel is TextChannel => channel.type === 'text')(channel) ?? null;
  }

  static resolveVoiceChannel(channel: GuildChannel) {
    return ((channel): channel is VoiceChannel => channel.type === 'voice')(channel) ?? null;
  }

  static resolveCategoryChannel(channel: GuildChannel) {
    return ((channel): channel is CategoryChannel => channel.type === 'category')(channel) ?? null;
  }

  static resolveNewsChannel(channel: GuildChannel) {
    return ((channel): channel is NewsChannel => channel.type === 'news')(channel) ?? null;
  }

  static resolveStoreChannel(channel: GuildChannel) {
    return ((channel): channel is StoreChannel => channel.type === 'store')(channel) ?? null;
  }

  static resolveDMChannel(channel: DMChannel) {
    return ((channel): channel is DMChannel => channel.type === 'dm')(channel) ?? null;
  }
}
