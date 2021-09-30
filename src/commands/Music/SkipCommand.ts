import { Snowflake } from 'discord.js';
import { Core } from '../../index';

export class SkipCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      category: Core.Handler.Command.CommandCategories.MUSIC,
      description: 'Skips the current song',
      name: 'skip',
      usage: 'skip',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    // Test
  }

  async runSlash(ctx: Core.Handler.Command.SlashContext) {
    const { commandInteraction, bot } = ctx;
    const subscription = bot.subscriptions.get(commandInteraction.guildId as Snowflake);

    const { dj } = bot.database.members.get(
      commandInteraction.member?.user.id as string,
    ).guilds[
        commandInteraction.guildId as string];
    if (!dj) {
      commandInteraction.reply('You must be a dj in this guild to be able to use this command!');
      return;
    }

    if (subscription) {
      subscription.audioPlayer.stop();
      await commandInteraction.reply('Skipped song!');
    } else {
      await commandInteraction.reply('Not playing in this server');
    }
  }
}
