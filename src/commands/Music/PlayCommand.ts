import {
  DiscordGatewayAdapterCreator,
  joinVoiceChannel,
} from '@discordjs/voice';
import { GuildMember, Snowflake } from 'discord.js';
import { Core } from '../../index';

export class PlayCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      category: Core.Handler.Command.CommandCategories.MUSIC,
      description: 'Plays a song',
      name: 'play',
      options: [
        {
          description: 'The URL of the song to play <only youtube urls for now>',
          name: 'url',
          required: true,
          type: 'STRING' as const,
        },
      ],
      usage: 'play <url>',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    // Test
  }

  async runSlash(ctx: Core.Handler.Command.SlashContext) {
    const { commandInteraction, bot } = ctx;

    await commandInteraction.deferReply();
    console.log(commandInteraction.options);
    const url = commandInteraction.options.get('url')!.value! as string;

    let subscription = bot.subscriptions.get(commandInteraction.guildId as Snowflake);
    if (!subscription) {
      if (commandInteraction.member instanceof GuildMember
        && commandInteraction.member.voice.channel) {
        const { channel } = commandInteraction.member.voice;
        subscription = new Core.Managers.Music.MusicManager(
          joinVoiceChannel({
            adapterCreator: channel.guild.voiceAdapterCreator as DiscordGatewayAdapterCreator,
            channelId: channel.id,
            guildId: channel.guild.id,
          }),
        );
        subscription.voiceConnection.on('error', (error: Error) => {
          bot.logger.warn(error);
        });
        bot.subscriptions.set(commandInteraction.guildId as Snowflake, subscription);
      }
    }

    if (!subscription) {
      await commandInteraction.followUp('Join a voice channel and then try that again!');
      return;
    }

    try {
      const track = await Core.Managers.Music.TrackManager.from(url, {
        onError(error) {
          commandInteraction.followUp({ content: `Error: ${error.message}`, ephemeral: true })
            .catch((error: Error) => bot.logger.warn(error));
        },
        onFinish() {
          if (subscription!.queue!.length <= 0) {
            subscription?.voiceConnection.destroy();
            bot.subscriptions.delete(commandInteraction.guildId as Snowflake);
          }
          commandInteraction.followUp({ content: 'Now finished!', ephemeral: true })
            .catch((error: Error) => bot.logger.warn(error));
        },
        onStart() {
          commandInteraction.followUp({ content: `Now playing! **${track.title}**`, ephemeral: true })
            .catch((error: Error) => bot.logger.warn(error));
        },
      });
      subscription.enqueue(track);
      await commandInteraction.followUp(`Queued **${track.title}**`);
    } catch (error) {
      bot.logger.warn(error);
      await commandInteraction.reply('Failed to play track, please try again later!');
    }
  }
}
