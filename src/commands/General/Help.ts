import {
  DMChannel, NewsChannel, TextChannel, Collection,
} from 'discord.js';
import {
  YinYangCommand, Util, Embed, Strings,
} from '../../index';

export class HelpCommand extends YinYangCommand.Command {
  constructor() {
    super({
      aliases: ['?', 'h'],
      category: YinYangCommand.CommandCategories.GENERAL,
      description: 'shows information about other commands',
      name: 'help',
      usage: 'help <commandName>',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    const {
      bot, args, channel, prefix,
    } = ctx;
    const { commands } = bot;
    const embed = new Embed();

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
      Strings.toProperCase(cmd.name),
      bot.client.user?.displayAvatarURL({ size: 4096 }),
    ).setDescription(cmd.description) // why not just use description?
      .addField('Usage', prefix + cmd.usage)
      .setFooter(`Category: ${cmd.category} | Enabled: ${cmd.enabled ? '✅' : '❌'}`);

    if (cmd.aliases.length !== 0) {
      embed.setTitle(`${embed.title} - ${cmd.aliases.join(', ')}`);
    }

    await channel.send({ embeds: [embed] });
  }

  private async sendCategories(
    channel: TextChannel | DMChannel | NewsChannel,
    commands: Collection<string, YinYangCommand.Command>,
    prefix: string | null,
  ) {
    const embed = new Embed();
    const categories = Util.groupBy(
      commands, (command: YinYangCommand.Command) => command.category,
    );

    categories.forEach((cmds, categoryName) => {
      const content: string[] = [];
      cmds.forEach((cmd) => {
        console.log(categoryName);
        content.push(`\`${prefix}${cmd.usage}\` -- ${cmd.description}`);
        console.log(content.join(' '));
      });
      embed.addField(categoryName, content.join('\n'));
    });

    await channel.send({ embeds: [embed] });
  }
}
