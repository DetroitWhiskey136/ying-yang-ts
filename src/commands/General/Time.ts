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
      channel.send('You must input a timezone');
      return;
    }

    const timeZone = this.getTimeZone(args.join(' '));
    const validTZ = moment.tz.zone(timeZone);

    if (validTZ === null) {
      channel.send('Cannot find a timezone with given name.');
      return;
    }
    channel.send(moment().tz(timeZone).format('YYYY-MM-DD hh:mm:ss a'));
  }

  async runSlash(ctx: YinYangCommand.SlashContext) {
    // nice database was the important one imo
    const { commandInteraction: interaction } = ctx;

    const timeZone = this.getTimeZone(interaction.options.first()!.value!.toString());
    const validTZ = moment.tz.zone(timeZone);

    if (validTZ === null) {
      interaction.reply(`The timezone format you provided: \`${timeZone}\` is not valid`);
      return;
    }
    interaction.reply(moment().tz(timeZone).format('YYYY-MM-DD hh:mm:ss a'));
  }

  private getTimeZone(query: string) {
    return tzList.find((tz) => tz.abbr === String(query).toUpperCase())?.zoneId ?? query;
  }
}
