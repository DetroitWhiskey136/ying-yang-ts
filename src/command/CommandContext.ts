import {
  Message, MessageMentions, GuildMember, Guild, User,
  TextChannel, DMChannel, VoiceChannel, NewsChannel,
} from 'discord.js';

import BotClient from '../client/BotClient';
import DiscordClient from '../client/DiscordClient';
import { Database } from '../database';

// #region Scope Declaration
interface commandContext {
  bot: BotClient;
  message: Message;
  prefix: string | null;
  query: string;
  args: string[];
}
// #endregion

export default class CommandContext {
  // #region Type Declarations
  public bot: BotClient;

  public message: Message;

  public mentions: MessageMentions;

  public member: GuildMember | null;

  public guild: Guild | null;

  public author: User;

  public channel: TextChannel | DMChannel | NewsChannel;

  public client: DiscordClient;

  public voiceChannel: VoiceChannel | null;

  public prefix: string | null;

  public query: string;

  public args: Array<string>;

  public database: Database;
  // #endregion

  // #region Constructor
  constructor(options: commandContext) {
    this.bot = options.bot;
    this.message = options.message;
    this.mentions = options.message.mentions;
    this.member = options.message?.member;
    this.guild = options.message.guild;
    this.author = options.message.author;
    this.channel = options.message.channel;
    this.client = options.bot.client;
    this.voiceChannel = this.getVoiceChannel(this.member, this.guild, this.client);
    this.prefix = options.prefix || null;
    this.query = options.query;
    this.args = options.args;
    this.database = options.bot.database;
  }
  // #endregion

  // #region Methods
  private getVoiceChannel(member: GuildMember | null, guild: Guild | null, client: DiscordClient) {
    if (member) {
      return member.voice.channel;
    } if (guild && client.voice) {
      return client.voice.connections.get(guild.id)?.channel || null;
    }
    return null;
  }
  // #endregion
}
