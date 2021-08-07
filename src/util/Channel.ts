import {
  TextChannel, VoiceChannel, GuildChannel, CategoryChannel,
  NewsChannel, DMChannel, StoreChannel,
} from 'discord.js';

export class ChannelUtil {
  static resolveTextChannel(channel: GuildChannel) {
    return ((channel): channel is TextChannel => channel.type === 'GUILD_TEXT')(channel) ?? null;
  }

  static resolveVoiceChannel(channel: GuildChannel) {
    return ((channel): channel is VoiceChannel => channel.type === 'GUILD_VOICE')(channel) ?? null;
  }

  static resolveCategoryChannel(channel: GuildChannel) {
    return ((channel): channel is CategoryChannel => channel.type === 'GUILD_CATEGORY')(channel) ?? null;
  }

  static resolveNewsChannel(channel: GuildChannel) {
    return ((channel): channel is NewsChannel => channel.type === 'GUILD_NEWS')(channel) ?? null;
  }

  static resolveStoreChannel(channel: GuildChannel) {
    return ((channel): channel is StoreChannel => channel.type === 'GUILD_STORE')(channel) ?? null;
  }

  static resolveDMChannel(channel: DMChannel) {
    return ((channel): channel is DMChannel => channel.type === 'DM')(channel) ?? null;
  }
}
