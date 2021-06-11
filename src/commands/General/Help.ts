import { MessageEmbed } from 'discord.js';
import { CommandContext } from '../../command/CommandContext';
import {
  BotClient, Command, Util, Embed,
} from '../../index';

export class HelpCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: ['?', 'h'],
      category: 'General',
      description: 'shows information about other commands',
      enabled: true,
      guildOnly: true,
      name: 'help',
      usage: 'help <commandName>',
    }, []);
  }

  run(ctx: CommandContext) {
    const {
      bot, args, channel, guild, author, prefix,
    } = ctx;
    const { commands } = bot;
    const embed = new Embed();

    if (!args[0]) {
      const categories = Util.groupBy(commands, (command: Command) => command.category);

      categories.forEach((cmds, categoryName) => {
        const content: Array<string> = [];
        cmds.forEach((cmd) => {
          content.push(`\`${prefix}${cmd.usage}\` -- ${cmd.description}`);
        });
        embed.addField(categoryName, content.join('\n'));
      });
      channel.send({ embed });
    } else {
      const commandName = args.shift()?.toLowerCase()!;
      const cmd = bot.commands.get(commandName)
        || bot.commands.get(bot.aliases.get(commandName)!);
      if (cmd) {
        embed.setTitle([
          cmd.usage,
          cmd.aliases.length > 0
            ? `-- ${cmd.aliases.join(' ')}`
            : '',
        ].join(' '))
          .setDescription(cmd.description ?? 'no description provided')
          .setFooter(`Category: ${cmd.category} | Enabled: ${cmd.enabled}`);
        channel.send({ embed });
      } else {
        channel.send(`Command: \`${commandName}\` not found use \`${prefix}help\` to see all commands`);
      }
    }
  }
}
