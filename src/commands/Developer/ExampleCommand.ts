import { Core } from '../../index';

export class ExampleCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      category: Core.Handler.Commands.CommandCategories.UNKNOWN,
      description: '',
      enabled: false,
      name: '',
      options: [],
      usage: '',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext): Promise<void> {
    // Code Here
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext): Promise<void> {
    // Code Here
  }
}
