import { Interaction } from 'discord.js';
import {
  BotClient, DiscordClient, Event, Files,
} from '../../index';

export class MessageEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'interaction',
    });
  }

  async run(bot: BotClient, client: DiscordClient, interaction: Interaction) {
    if (!interaction.isCommand()) return;
    try {
      await bot.slashCommands.get(interaction.commandName)?._run(bot, interaction);
    } catch (error) {
      bot.client.emit('error', error);
    }
  }
}
