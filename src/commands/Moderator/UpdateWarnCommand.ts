import { YinYangCommand } from '../../index';

export class UpdateWarnCommand extends YinYangCommand.Command {
  constructor() {
    super({
      aliases: ['uw', 'uwarn'],
      category: YinYangCommand.CommandCategories.MODERATOR,
      description: 'Update a warning for a user',
      enabled: false,
      name: 'updatewarn',
      usage: 'updatewarn <user> <points> <reason>',
    });
  }

  run() {

  }
}
