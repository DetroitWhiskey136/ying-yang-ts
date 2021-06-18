import moment from 'moment';
import 'moment-timezone';
import tzList from '../../../data/resources/timezone-list.json';
import { YinYangCommand } from '../../index';

export class TimeCommand extends YinYangCommand.Command {
  constructor() {
    super({
      category: YinYangCommand.CommandCategories.GENERAL,
      description: 'shows the time in a specified timezone',
      name: 'time',
      usage: 'time <timezone>',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    const { channel, args } = ctx;

    if (args.length === 0) {
      await channel.send('Please provide a timezone');
      return;
    }

    const timezone = moment.tz.zone(this.getTimezone(args.join(' ')));
    if (timezone === null) {
      await channel.send('Invalid timezone is given.');
      return;
    }
    await channel.send(moment().tz(timezone.name).format('YYYY-MM-DD hh:mm:ss a'));
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    const { commandInteraction: interaction } = ctx;

    const timezone = moment.tz.zone(this.getTimezone(String(interaction.options.first()?.value!)));
    if (timezone === null) {
      await interaction.reply('Invalid timezone is given');
      return;
    }
    await interaction.reply(moment().tz(timezone.name).format('YYYY-MM-DD hh:mm:ss a'));
  }

  private getTimezone(query: string) {
    return tzList.find((tz) => tz.abbr === String(query).toUpperCase())?.zoneId ?? query;
  }
}
