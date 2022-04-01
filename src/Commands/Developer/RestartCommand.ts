import { Core } from '../../index';

export class RestartCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      aliases: ['reboot'],
      category: Core.Handler.Commands.CommandCategories.DEVELOPER,
      description: 'Restarts the bot if running in an environment that supports it. (pm2, forever. etc)',
      enabled: true,
      name: 'restart',
      options: [],
      usage: 'restart',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext): Promise<void> {
    const {
      bot, channel, database, client, message,
    } = ctx;
    const embed = new Core.Discord.Embed()
      .setColor('RED');

    embed.setDescription('Bot is restarting!');
    const msg = await channel.send({ embeds: [embed] });
    bot.logger.info('Bot is restarting!');
    database.settings.update(
      client.user!.id, {
        restart: {
          channel: channel.id,
          isRestart: true,
          message: msg.id,
        },
      },
    );
    process.exit(0);
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext): Promise<void> {
    // Code Here
  }
}
