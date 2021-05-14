import { BotClient, Command } from '../../index';

export class ClearWarnCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: ['cw', 'cwarn'],
      category: 'Moderator',
      description: 'Clears all warnings for a user',
      enabled: false,
      guildOnly: true,
      name: 'clearwarns',
      usage: 'clearwarns <user>',
    }, []);
  }

  run() {

  }
}
