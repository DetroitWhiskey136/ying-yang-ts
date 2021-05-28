import { MessageButton } from 'discord-buttons';

import { CommandContext } from '../../command/CommandContext';
import { BotClient, Command, Embed } from '../../index';

export class TestCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: [],
      category: 'Developer',
      description: 'tests a command',
      enabled: true,
      guildOnly: true,
      name: 'test',
      usage: 'test',
    }, [
    ]);
  }

  async run(ctx: CommandContext) {
    const embed = new Embed()
      .setTitle('This is testing out the new buttons stuff on discord');

    const button = new MessageButton()
      .setStyle('green')
      .setLabel('Did this work?')
      .setID('1');

    ctx.channel.send({ button, embed })
      .then((msg) => {
        setTimeout(() => msg.delete(), 60000);
      })
      .catch((error) => ctx.client.emit('error', error))
      .finally(() => ctx.bot.logger.info('this worked!'));
  }
}
