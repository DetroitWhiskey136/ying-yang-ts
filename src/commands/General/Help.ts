import {
  Collection, TextBasedChannels,
} from 'discord.js';
import { Core } from '../../index';

export class HelpCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      aliases: ['?', 'h'],
      category: Core.Handler.Command.CommandCategories.GENERAL,
      description: 'shows information about other commands',
      name: 'help',
      usage: 'help <commandName>',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    const {
      bot, args, channel, prefix,
    } = ctx;
    const { commands } = bot;
    const embed = new Core.Discord.Embed();

    if (args[0] === undefined) {
      await this.sendCategories(channel, commands, prefix);
      return;
    }

    const commandName = args.shift()?.toLowerCase()!;
    const cmd = bot.commands.get(commandName)
            ?? bot.commands.get(bot.aliases.get(commandName) ?? '');

    if (cmd === undefined) {
      await channel.send(`Command not found. Use \`${prefix}help\` to see all commands`);
      return;
    }

    embed.setAuthor(
      Core.Util.Strings.toProperCase(cmd.name),
      bot.client.user?.displayAvatarURL({ size: 4096 }),
    ).setDescription(cmd.description) // why not just use description?
      .addField('Usage', prefix + cmd.usage)
      .setFooter(`Category: ${cmd.category} | Enabled: ${cmd.enabled ? '✅' : '❌'}`);

    if (cmd.aliases.length !== 0) {
      embed.setTitle(`${cmd.aliases.join(', ')}`);
    }

    await channel.send({ embeds: [embed] });
  }

  private async sendCategories(
    channel: TextBasedChannels,
    commands: Collection<string, Core.Handler.Command.Command>,
    prefix: string | null,
  ) {
    const embed = new Core.Discord.Embed();
    const categories = Core.Util.Util.groupBy(
      commands, (command: Core.Handler.Command.Command) => command.category,
    );

    categories.forEach((cmds, categoryName) => {
      const content: string[] = [];
      cmds.forEach((cmd) => {
        content.push(`\`${prefix}${cmd.usage}\` -- ${cmd.description}`);
      });
      embed.addField(categoryName, content.join('\n'));
    });

    embed.setFooter('<arg> = required | [arg] = optional');

    await channel.send({ embeds: [embed] });
  }
}
