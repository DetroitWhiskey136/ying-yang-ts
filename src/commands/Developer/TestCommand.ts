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

  async runNormal(ctx: Core.Handler.Commands.CommandContext) {
    // Test
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext) {
    // Test
  }
}
