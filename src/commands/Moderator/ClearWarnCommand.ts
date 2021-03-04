import { BotClient } from '../../client/index';
import { Command } from '../../handlers/index';

export class ClearWarnCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: ['cw', 'cwarn'],
      category: 'Moderator',
      description: 'Clears all warnings for a user',
      enabled: true,
      guildOnly: true,
      name: 'clearwarns',
      usage: 'clearwarns <user>',
    }, []);
  }

  run() {

  }
}
