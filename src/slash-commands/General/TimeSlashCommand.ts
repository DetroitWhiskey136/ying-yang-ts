import { CommandInteraction } from 'discord.js';
import moment from 'moment';
import 'moment-timezone';
import tzList from '../../../data/resources/timezone-list.json';
import { SlashCommand, BotClient } from '../../index';

export class TimeSlashCommand extends SlashCommand {
  constructor(bot: BotClient) {
    super(
      bot,
      {
        description: 'Returns the time in the requested timezone',
        name: 'time',
        options: [
          {
            description: 'The timezone you want to query',
            name: 'timezone',
            required: true,
            type: 'STRING',
          },
        ],
      },
      {
        enabled: true,
      },
    );
  }

  async run(bot: BotClient, interaction: CommandInteraction) {
    const timezone = interaction.options.find((ic) => ic.name === 'timezone')?.value;
    const timeZone = tzList.find(
      (tz) => tz.abbr === String(timezone).toUpperCase(),
    )?.zoneId ?? timezone;

    const validTZ = moment.tz.zone(String(timeZone));

    if (validTZ) {
      interaction.reply(
        moment().tz(String(timeZone)).format('YYYY-MM-DD hh:mm:ss a'),
      );
    } else {
      interaction.reply(`The timezone format you provided: \`${timeZone}\` is not valid`);
    }
  }
}
