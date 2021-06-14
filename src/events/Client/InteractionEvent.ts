import { Interaction } from 'discord.js';
import {
  BotClient, DiscordClient, Event, Files, YinYangCommand,
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
    const command = bot.commands.get(interaction.commandName);
    if (!command) return;

    const params = {
      bot, commandInteraction: interaction,
    };
    await command?._runSlash(new YinYangCommand.SlashContext(params))
      .catch((e) => bot.client.emit('error', e));
  }
}
