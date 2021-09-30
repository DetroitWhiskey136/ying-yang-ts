import { getColorFromURL } from 'color-thief-node';
import { ColorResolvable } from 'discord.js';

import { Core } from '../../index';

export class AvatarCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      category: Core.Handler.Command.CommandCategories.GENERAL,
      description: 'Display a users avatar',
      name: 'avatar',
      options: [
        {
          description: 'The user you want the avatar from.',
          name: 'user',
          required: true,
          type: 'USER',
        },
      ],
      usage: 'avatar <user>',
    });
  }

  async runSlash(ctx: Core.Handler.Command.SlashContext) {
    const { commandInteraction: interaction } = ctx;

    const user = interaction.options.get('user')?.user ?? interaction.user;
    const avatarUrl = user.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 });

    let dominantColor;
    try {
      dominantColor = await getColorFromURL(avatarUrl);
    } catch (e) {
      dominantColor = 'BLURPLE';
    }

    const embed = new Core.Discord.Embed()
      .setImage(avatarUrl)
      .setTitle(`Profile Picture for ${user.username}`)
      .setColor(dominantColor as ColorResolvable);
    await interaction.reply({ embeds: [embed] });
  }
}
