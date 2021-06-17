import { YinYangCommand } from '../../index';

export class PingCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.GENERAL,
      description: 'Replies with Pong!',
      name: 'ping',
      usage: 'ping',
    });
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    const { commandInteraction: interaction } = ctx;
    await interaction.reply('Pong!');
  }
}
