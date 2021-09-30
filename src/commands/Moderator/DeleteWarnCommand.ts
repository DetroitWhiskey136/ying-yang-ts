import { Core } from '../../index';

export class DeleteWarnCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      aliases: ['delwarn', 'dw', 'dwarn'],
      category: Core.Handler.Command.CommandCategories.MODERATOR,
      description: 'Deletes a users warning',
      enabled: false,
      name: 'deletewarn',
      usage: 'deletewarn <warningID>',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    // Not implemented
  }
}
