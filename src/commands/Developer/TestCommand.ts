import { YinYangCommand } from '../../index';

export class TestCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.DEVELOPER,
      description: 'This is a test',
      name: 'test',
      usage: 'test (don\'t use this)',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    console.log('worked?', this);
  }
}
