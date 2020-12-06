import { BotClient } from '../../client/index';
import { Command } from '../../handlers/index';

class DeleteWarnCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: ['delwarn', 'dw', 'dwarn'],
      category: 'Moderator',
      description: 'Deletes a users warning',
      enabled: true,
      guildOnly: true,
      name: 'deletewarn',
      usage: 'deletewarn <warningID>',
    }, []);
  }

  run() {

  }
}

export = DeleteWarnCommand;
