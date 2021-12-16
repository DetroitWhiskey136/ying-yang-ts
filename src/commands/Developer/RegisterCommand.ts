import { Core } from '../../index';

export class RegisterCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      aliases: ['reg', 'deploy'],
      category: Core.Handler.Command.CommandCategories.DEVELOPER,
      description: 'registers a slash command!',
      name: 'register',
      usage: 'register <command>',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    const {
      args, bot, message, guild,
    } = ctx;

    if (!args[0]) {
      message.reply({ content: 'you must include the command' });
      return;
    }
    const command = bot.commands.get(args[0]) ?? bot.commands.get(bot.aliases.get(args[0])!);

    if (!command) {
      message.reply({ content: 'That command/alias does not exist!' });
      return;
    }

    const data = {
      description: command.description,
      name: command.name,
      options: command.options,
    };

    console.log(data);

    guild?.commands.create(data);

    console.log(guild?.commands.cache);
    message.reply({ content: 'Command Registered' });
  }
}
