import moment from 'moment';
import 'moment-timezone';
import tzList from '../../../data/resources/timezone-list.json';
import { CommandContext } from '../../command/CommandContext';
import { BotClient, Command } from '../../index';

export class TimeCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: [],
      category: 'General',
      description: 'shows the time in a specified timezone',
      enabled: false,
      guildOnly: true,
      name: 'time',
      usage: 'time <timezone>',
    }, []);
  }

  run(ctx: CommandContext) {
    const {
      channel, args,
    } = ctx;

    if (!args[0]) {
      channel.send('You must input a timezone');
      return;
    }

    const timeZone = tzList.find((tz) => tz.abbr === args[0].toUpperCase())?.zoneId ?? args[0];

    const validTZ = moment.tz.zone(timeZone);

    if (validTZ) {
      channel.send(moment().tz(timeZone).format('YYYY-MM-DD hh:mm:ss a'));
    } else {
      channel.send(`The timezone format you provided: \`${timeZone}\` is not valid`);
    }
  }
}
