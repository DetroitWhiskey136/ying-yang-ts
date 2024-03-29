import { Collection, TextBasedChannel } from 'discord.js';
import { Core } from '../../index';

export class HelpCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      aliases: ['?', 'h'],
      category: Core.Handler.Commands.CommandCategories.GENERAL,
      description: 'shows information about other commands',
      name: 'help',
      usage: 'help <commandName>',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext) {
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
      await channel.send(
        `Command not found. Use \`${prefix}help\` to see all commands`,
      );
      return;
    }

    embed
      .setAuthor({
        iconURL: bot.client.user?.displayAvatarURL({ size: 4096 }),
        name: Core.Util.Strings.toProperCase(cmd.name),
      })
      .setDescription(cmd.description) // why not just use description?
      .addField('Usage', prefix + cmd.usage)
      .setFooter({ text: `Category: ${cmd.category} | Enabled: ${cmd.enabled ? '✅' : '❌'}` });

    if (cmd.aliases.length !== 0) {
      embed.setTitle(`${cmd.aliases.join(', ')}`);
    }

    await channel.send({ embeds: [embed] });
  }

  private async sendCategories(
    channel: TextBasedChannel,
    commands: Collection<string, Core.Handler.Commands.Command>,
    prefix: string | null,
  ) {
    const embed = new Core.Discord.Embed();
    const categories = Core.Util.Util.groupBy(
      commands,
      (command: Core.Handler.Commands.Command) => command.category,
    );

    categories.forEach((cmds, categoryName) => {
      const content: string[] = [];
      cmds.forEach((cmd) => {
        content.push(`\`${prefix}${cmd.usage}\` -- ${cmd.description}`);
      });
      embed.addField(categoryName, content.join('\n'));
    });

    embed.setFooter({ text: '<arg> = required | [arg] = optional' });

    await channel.send({ embeds: [embed] });
  }
}
