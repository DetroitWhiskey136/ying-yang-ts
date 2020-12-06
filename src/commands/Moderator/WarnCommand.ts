import { BotClient } from '../../client/index';
import CommandContext from '../../command/CommandContext';
import { Command } from '../../handlers/index';

class WarnCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: [],
      category: 'Moderator',
      description: 'Gives a user a warning',
      enabled: true,
      guildOnly: true,
      name: 'warn',
      usage: 'warn <user> <points> <reason>',
    }, []);
  }

  run(ctx: CommandContext) {
    const {
      author, args, client, database, guild, member,
    } = ctx;

    const user = null;
  }
}

export = WarnCommand;
