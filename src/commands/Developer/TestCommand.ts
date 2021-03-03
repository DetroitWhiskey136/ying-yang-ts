import { BotClient } from '../../client/index';
import { CommandContext } from '../../command/CommandContext';
import { Command } from '../../handlers/index';

export = class TestCommand extends Command {
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
        type: 'string',
      },
    ]);
  }

  run(ctx: CommandContext) {
    ctx.channel.send(`hello from test the result was: ${ctx.args.join(' ')}`);
  }
}
