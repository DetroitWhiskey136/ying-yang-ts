import { Core } from '../../index';

export class ClearWarnCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      aliases: ['cw', 'cwarn', 'clearwarn'],
      category: Core.Handler.Command.CommandCategories.MODERATOR,
      description: 'Clears all warnings for a user',
      enabled: false,
      name: 'clearwarns',
      usage: 'clearwarns <user>',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    // Not implemented
  }
}
