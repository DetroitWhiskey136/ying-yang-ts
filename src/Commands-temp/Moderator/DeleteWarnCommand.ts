import { Core } from '../../index';

export class DeleteWarnCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      aliases: ['delwarn', 'dw', 'dwarn'],
      category: Core.Handler.Commands.CommandCategories.MODERATOR,
      description: 'Deletes a users warning',
      enabled: false,
      name: 'deletewarn',
      usage: 'deletewarn <warningID>',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext) {
    // Not implemented
  }
}
