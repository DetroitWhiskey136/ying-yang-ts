import { YinYangCommand } from '../../index';

export class TestCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.DEVELOPER,
      description: 'This is a test',
      name: 'test',
      options: [

      ],
      usage: 'test',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    // Test
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    // Test
  }
}
