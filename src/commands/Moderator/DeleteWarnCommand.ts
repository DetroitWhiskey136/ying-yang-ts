import { BotClient, Command } from '../../index';

export class DeleteWarnCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: ['delwarn', 'dw', 'dwarn'],
      category: 'Moderator',
      description: 'Deletes a users warning',
      enabled: false,
      guildOnly: true,
      name: 'deletewarn',
      usage: 'deletewarn <warningID>',
    }, []);
  }

  run() {

  }
}
