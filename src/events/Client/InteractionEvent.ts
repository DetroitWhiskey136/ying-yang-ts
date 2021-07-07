import { Interaction, GuildMember, Message } from 'discord.js';
import {
  BotClient, DiscordClient, Event, YinYangCommand, YinYangPermissions,
} from '../../index';

export class InteractionEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'interactionCreate',
    });
  }

  private static getPermLevel(interaction: Interaction, bot: BotClient) {
    const { user, member, guild } = interaction;

    return guild
      ? YinYangPermissions.permMember(member as GuildMember, bot)
      : YinYangPermissions.permUser(user, bot);
  }

  async run(bot: BotClient, client: DiscordClient, interaction: Interaction) {
    if (!interaction.isCommand()) return;

    const command = bot.commands.get(interaction.commandName);
    if (command === undefined) return;

    if ((command.permission ?? 0) > InteractionEvent.getPermLevel(interaction, bot)) {
      interaction.reply('you do not have permission to use this command!');
      return;
    }

    const params = {
      bot, commandInteraction: interaction,
    };

    command._runSlash(new YinYangCommand.SlashContext(params));
  }
}
