import { Core } from '../../index';

export class UpdateWarnCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      aliases: ['uw', 'uwarn'],
      category: Core.Handler.Command.CommandCategories.MODERATOR,
      description: 'Update a warning for a user',
      enabled: false,
      name: 'updatewarn',
      usage: 'updatewarn <user> [points] [reason]',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    // Not implemented
  }
}
