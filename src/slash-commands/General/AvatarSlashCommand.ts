import { CommandInteraction } from 'discord.js';
import { SlashCommand, BotClient, Embed } from '../../index';

export class AvatarSlashCommand extends SlashCommand {
  constructor(bot: BotClient) {
    super(
      bot,
      {
        description: 'Display a users avatar',
        name: 'avatar',
        options: [
          {
            description: 'The user you want',
            name: 'user',
            required: false,
            type: 'USER',
          },
        ],
      },
      {
        enabled: true,
      },
    );
  }

  async run(bot: BotClient, interaction: CommandInteraction) {
    const { options } = interaction;

    const user = options.get('user')?.user ?? interaction.user;

    const embed = new Embed()
      .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setTitle(`${user.username}'s Profile Picture`)
      .setColor('#00FFFF');
    interaction.reply({ embeds: [embed] }).catch((error) => console.log(error));
  }
}
