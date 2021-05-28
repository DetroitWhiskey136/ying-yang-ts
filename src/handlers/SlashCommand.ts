import {
  ApplicationCommand,
  ApplicationCommandData,
  CommandInteraction,
} from 'discord.js';
import { BotClient } from '../index';

interface CommandOptions {
  enabled?: boolean;
  type?: string;
}

export interface SlashCommand extends ApplicationCommand {
  bot: BotClient;
  category: string;
  enabled: boolean;
  type: string;
}

export class SlashCommand extends ApplicationCommand {
  constructor(
    bot: BotClient,
    data: ApplicationCommandData,
    options: CommandOptions,
  ) {
    super(bot.client, data);
    this.bot = bot;
    this.setup(options);
  }

  private setup(options: CommandOptions) {
    this.enabled = options.enabled || false;
    this.type = 'slash';
  }

  run(bot: BotClient, interaction: CommandInteraction): Promise<void> | void {
    throw new Error(`${this.constructor.name} doesn't have a run() method.`);
  }

  public async _run(
    bot: BotClient,
    interaction: CommandInteraction,
  ): Promise<void> {
    try {
      await this.run(bot, interaction);
    } catch (error) {
      bot.client.emit('error', error);
    }
  }
}
