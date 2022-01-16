import { Interaction, GuildMember, Message } from 'discord.js';
import { Core } from '../../index';

export class InteractionEvent extends Core.Handler.Event.Event {
  constructor() {
    super({
      enabled: true,
      name: 'interactionCreate',
    });
  }

  private static getPermLevel(
    interaction: Interaction,
    bot: Core.Client.BotClient,
  ) {
    const { user, member, guild } = interaction;

    return guild
      ? Core.Managers.Permissions.permMember(member as GuildMember, bot)
      : Core.Managers.Permissions.permUser(user, bot);
  }

  async run(
    bot: Core.Client.BotClient,
    client: Core.Client.DiscordClient,
    interaction: Interaction,
  ) {
    if (!interaction.isCommand()) return;

    const command = bot.commands.get(interaction.commandName);
    if (command === undefined) return;

    if (
      (command.permission ?? 0)
      > InteractionEvent.getPermLevel(interaction, bot)
    ) {
      interaction.reply('you do not have permission to use this command!');
      return;
    }

    const params = {
      bot,
      commandInteraction: interaction,
    };

    command._runSlash(new Core.Handler.Commands.SlashContext(params));
  }
}
