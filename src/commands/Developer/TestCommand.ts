import { Core } from '../../index';

export class TestCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      category: Core.Handler.Commands.CommandCategories.DEVELOPER,
      description: 'This is a test',
      name: 'test',
      options: [],
      usage: 'test',
    });
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext) {
    // Test
  }
}
