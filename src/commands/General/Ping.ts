import { Core } from '../../index';

export class PingCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      category: Core.Handler.Command.CommandCategories.GENERAL,
      description: 'Replies with Pong!',
      name: 'ping',
      usage: 'ping',
    });
  }

  async runSlash(ctx: Core.Handler.Command.SlashContext) {
    const { commandInteraction: interaction } = ctx;
    await interaction.reply(`Pong! \`${ctx.bot.client.ws.ping}ms\``);
  }
}
