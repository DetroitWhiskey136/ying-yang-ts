/* eslint-disable consistent-return */
import { ColorResolvable, TextBasedChannel } from 'discord.js';
import { Core } from '../../index';

export class ReloadCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      aliases: ['rl', 'load'],
      category: Core.Handler.Commands.CommandCategories.DEVELOPER,
      description: 'Reloads a command that has been modified',
      enabled: true,
      name: 'reload',
      options: [],
      usage: 'reload <command>',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext) {
    const {
      bot, message, channel, query,
    } = ctx;

    const embed = new Core.Discord.Embed();

    if (!query) {
      this.replyEmbed(embed, channel, 'RED', 'You must provide a command to reload.');
      return;
    }

    const commands = bot.commands.get(query) || bot.commands.get(bot.aliases.get(query)!);

    if (!commands) {
      this.replyEmbed(embed, channel, 'RED', `The Command \`${query}\` doesn't exist, nor was it an alias.`);
      return;
    }

    const isUnloaded = await Core.Util.Files.UnloadFile(commands.location, commands.name, bot);
    if (!isUnloaded) {
      message.reply('Error Unloading Command');
      return;
    }

    await Core.Util.Files.LoadFile(commands.location, commands.filename, bot);
    channel.send(`The Command \`${commands.name}\` has been reloaded`);
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext): Promise<void> {
    // Code Here
  }

  private async replyEmbed(
    embed: Core.Discord.Embed,
    channel: TextBasedChannel,
    color: ColorResolvable,
    message: string,
  ) {
    if (!embed || !channel || !color || !message) return;

    embed
      .setColor(color)
      .setDescription(message);
    await channel.send({ embeds: [embed] });
  }
}
