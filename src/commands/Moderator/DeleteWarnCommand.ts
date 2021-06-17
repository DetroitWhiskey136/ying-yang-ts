import { YinYangCommand } from '../../index';

export class DeleteWarnCommand extends YinYangCommand.Command {
  constructor() {
    super({
      aliases: ['delwarn', 'dw', 'dwarn'],
      category: YinYangCommand.CommandCategories.MODERATOR,
      description: 'Deletes a users warning',
      enabled: false,
      name: 'deletewarn',
      usage: 'deletewarn <warningID>',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    // Not implemented
  }
}
