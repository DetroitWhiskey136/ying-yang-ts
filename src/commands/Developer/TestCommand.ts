import { CommandContext } from '../../command/CommandContext';
import { BotClient, Command, Embed } from '../../index';

export class TestCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: [],
      category: 'Developer',
      description: 'tests a command',
      enabled: false,
      guildOnly: true,
      name: 'test',
      usage: 'test',
    }, [
    ]);
  }

  async run(ctx: CommandContext) {
    return undefined;
  }
}
