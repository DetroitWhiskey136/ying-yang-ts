import { Interaction } from 'discord.js';
import {
  BotClient, DiscordClient, Event, YinYangCommand,
} from '../../index';

export class InteractionEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'interaction',
    });
  }

  async run(bot: BotClient, client: DiscordClient, interaction: Interaction) {
    if (!interaction.isCommand()) return;

    const command = bot.commands.get(interaction.commandName);
    if (command === undefined) return;

    const params = {
      bot, commandInteraction: interaction,
    };

    command._runSlash(new YinYangCommand.SlashContext(params));
  }
}
