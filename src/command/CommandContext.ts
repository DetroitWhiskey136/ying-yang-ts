import BotClient from 'src/client/BotClient';
import {
  Message, MessageMentions, GuildMember, Guild, User,
  TextChannel, DMChannel, VoiceChannel, NewsChannel, Structures,
} from 'discord.js';
import DiscordClient from 'src/client/DiscordClient';
import { Database } from 'src/database';

interface commandContext {
  bot: BotClient;
  message: Message;
  prefix: string | null;
  query: string;
  args: string[];
}

export default class CommandContext {
  bot: BotClient;

  message: Message;

  mentions: MessageMentions;

  member: GuildMember | null;

  guild: Guild | null;

  author: User;

  channel: TextChannel | DMChannel | NewsChannel;

  client: DiscordClient;

  voiceChannel: VoiceChannel | null;

  prefix: string | null;

  query: string;

  args: string[];

  database: Database;

  constructor(options: commandContext) {
    this.bot = options.bot;
    this.message = options.message;
    this.mentions = options.message.mentions;
    this.member = options.message?.member;
    this.guild = options.message.guild;
    this.author = options.message.author;
    this.channel = options.message.channel;
    this.client = options.bot.client;
    this.voiceChannel = this._getVoiceChannel(this.member, this.guild, this.client);
    this.prefix = options.prefix || null;
    this.query = options.query;
    this.args = options.args;
    this.database = options.bot.database;
  }

  _getVoiceChannel(member: GuildMember | null, guild: Guild | null, client: DiscordClient) {
    if (member) {
      return member.voice.channel;
    } if (guild && client.voice) {
      return client.voice.connections.get(guild.id)?.channel || null;
    }
    return null;
  }
}
