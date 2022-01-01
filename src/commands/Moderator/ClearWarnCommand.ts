import { Core } from '../../index';

export class ClearWarnCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      aliases: ['cw', 'cwarn', 'clearwarn'],
      category: Core.Handler.Commands.CommandCategories.MODERATOR,
      description: 'Clears all warnings for a user',
      enabled: false,
      name: 'clearwarns',
      usage: 'clearwarns <user>',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext) {
    // Not implemented
  }
}
