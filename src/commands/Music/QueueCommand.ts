import {
  AudioPlayerStatus,
  AudioResource,
} from '@discordjs/voice';
import { GuildMember, Snowflake } from 'discord.js';
import {
  YinYangCommand, MusicManager, TrackManager,
} from '../../index';

export class QueueCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.MUSIC,
      description: 'Lists the current songs in the queue',
      name: 'queue',
      usage: 'queue',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    // Test
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    const { commandInteraction, bot } = ctx;
    const subscription = bot.subscriptions.get(commandInteraction.guildId as Snowflake);

    if (subscription) {
      const current = subscription.audioPlayer.state.status === AudioPlayerStatus.Idle
        ? 'Nothing is currently playing!'
        : `Playing **${(subscription.audioPlayer.state.resource as AudioResource<TrackManager>).metadata.title}**`;

      const queue = subscription.queue
        .slice(0, 5)
        .map((track, index) => `${index + 1} ${track.title}`)
        .join('\n');

      await commandInteraction.reply(`${current}\n${queue}`);
    } else {
      await commandInteraction.reply('Not playing in this server');
    }
  }
}
