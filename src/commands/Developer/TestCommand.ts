import { BotClient } from '../../client/index';
import CommandContext from '../../command/CommandContext';
import { Command } from '../../handlers/index';

class TestCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: [],
      category: 'Developer',
      description: 'tests a command',
      enabled: true,
      guildOnly: true,
      name: 'test',
      usage: 'test',
    }, [
      {
        required: true,
        type: 'user',
      },
    ]);
  }

  run(ctx: CommandContext) {
    ctx.channel.send('hello from test');
  }
}

export = TestCommand;
