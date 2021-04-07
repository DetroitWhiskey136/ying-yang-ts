import { BotClient, Command } from '../../index';

export class UpdateWarnCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: ['uw', 'uwarn'],
      category: 'Moderator',
      description: 'Update a warning for a user',
      enabled: true,
      guildOnly: true,
      name: 'updatewarn',
      usage: 'updatewarn <user> <points> <reason>',
    }, []);
  }

  run() {

  }
}
