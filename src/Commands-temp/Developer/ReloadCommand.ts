import { Core } from '../../index';

export class ReloadCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      aliases: ['rl', 'load'],
      category: Core.Handler.Commands.CommandCategories.DEVELOPER,
      description: 'Reloads a command that has been modified',
      enabled: false,
      name: 'reload',
      options: [],
      usage: 'reload <command>',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext): Promise<void> {
    // Code Here...
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext): Promise<void> {
    // Code Here
  }
}
