import { YinYangCommand, BotClient } from '../../index';

export class PingSlashCommand extends YinYangCommand.Command {
  constructor(bot: BotClient) {
    super({
      category: YinYangCommand.CommandCategories.GENERAL,
      description: 'Replies with Pong!',
      name: 'ping',
    });
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    ctx.commandInteraction.reply('Pong!');
  }
}
