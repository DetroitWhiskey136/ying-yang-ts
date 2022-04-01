import { TextBasedChannel } from 'discord.js';
import { Core } from '../../index';

export class MessageEvent extends Core.Handler.Event.Event {
  constructor() {
    super({
      enabled: true,
      name: 'ready',
    });
  }

  async run(bot: Core.Client.BotClient, client: Core.Client.DiscordClient) {
    const settings = bot.database.settings.ensure(
      client.user!.id,
      {
        guilds: client.guilds.cache.size,
        restart: {
          channel: '',
          isRestart: false,
          message: '',
        },
      },
    );

    // If bot has been restarted preform some actions to logged the information.
    const { isRestart, channel, message } = settings.restart;
    if (isRestart) {
      const chan = await client.channels.fetch(channel) as TextBasedChannel;
      const msg = await chan?.messages.fetch(message);

      const embed = new Core.Discord.Embed()
        .setDescription('Bot has restarted successfully!');

      console.log(msg.author.username);
      await msg.edit({ embeds: [embed] });

      bot.logger.info('Bot has restarted successfully!');
      bot.database.settings.update(
        client.user!.id, {
          restart: {
            channel: '',
            isRestart: false,
            message: '',
          },
        },
      );
    }
  }
}
