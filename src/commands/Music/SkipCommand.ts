import { Snowflake } from 'discord.js';
import { YinYangCommand } from '../../index';

export class SkipCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.MUSIC,
      description: 'Skips the current song',
      name: 'skip',
      usage: 'skip',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    // Test
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
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
