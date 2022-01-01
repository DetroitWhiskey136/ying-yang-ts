import { Core } from '../../index';

export class PingCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      category: Core.Handler.Commands.CommandCategories.GENERAL,
      description: 'Replies with Pong!',
      name: 'ping',
      usage: 'ping',
    });
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext) {
    const { commandInteraction: interaction } = ctx;
    await interaction.reply(`Pong! \`${ctx.bot.client.ws.ping}ms\``);
  }
}
