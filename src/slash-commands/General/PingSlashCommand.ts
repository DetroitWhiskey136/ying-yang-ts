import { CommandInteraction } from 'discord.js';
import { SlashCommand, BotClient } from '../../index';

export class PingSlashCommand extends SlashCommand {
  constructor(bot: BotClient) {
    super(
      bot,
      {
        description: 'Replies with Pong!',
        name: 'ping',
      },
      {
        enabled: true,
      },
    );
  }

  async run(bot: BotClient, interaction: CommandInteraction) {
    interaction.reply('Pong!');
  }
}
