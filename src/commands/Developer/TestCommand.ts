import { Core } from '../../index';

export class TestCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      category: Core.Handler.Command.CommandCategories.DEVELOPER,
      description: 'This is a test',
      name: 'test',
      options: [

      ],
      usage: 'test',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    // Test
  }

  async runSlash(ctx: Core.Handler.Command.SlashContext) {
    // Test
  }
}
