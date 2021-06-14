import { YinYangCommand } from '../../index';

export class PingCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.GENERAL,
      description: 'Replies with Pong!',
      name: 'ping',
      options: [],
    });
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    const { commandInteraction: interaction } = ctx;
    interaction.reply('Pong!');
  }
}
