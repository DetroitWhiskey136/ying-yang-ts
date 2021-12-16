import { Snowflake } from 'discord.js';
import moment, { MomentZone } from 'moment';
import 'moment-timezone';
import tzList from '../../../data/resources/timezone-list.json';
import { Core } from '../../index';

export class TimeCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      category: Core.Handler.Command.CommandCategories.GENERAL,
      description: 'shows the time in a specified timezone',
      name: 'time',
      options: [
        {
          description: 'The timezone you would like to search for',
          name: 'timezone',
          required: false,
          type: 'STRING',
        },
        {
          description:
            'can only be used to get a users timezone, assuming they have one set.',
          name: 'person',
          required: false,
          type: 'USER',
        },
      ],
      usage: 'time <timezone>',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    const { channel, args, bot } = ctx;

    if (args.length === 0) {
      await channel.send('Please provide a timezone');
      return;
    }

    const timezone = moment.tz.zone(this.getTimezone(args.join(' ')));
    if (timezone === null) {
      await channel.send('Invalid timezone is given.');
      return;
    }
    await channel.send(
      moment().tz(timezone.name).format('YYYY-MM-DD hh:mm:ss a'),
    );
  }

  async runSlash(ctx: Core.Handler.Command.SlashContext) {
    const { commandInteraction: interaction, bot } = ctx;
    const { options } = interaction;
    const args = {
      user: options.get('person')?.user,
      value: options.get('timezone')?.value,
    };
    let timezone: MomentZone | null = null;

    if (args.value) {
      timezone = moment.tz.zone(this.getTimezone(args.value as string));
    } else if (args.user) {
      const tz = bot.database.users.get(args.user!.id).timezone;
      timezone = moment.tz.zone(this.getTimezone(tz));
    }

    if (!timezone) {
      await interaction.reply('Invalid timezone is given');
      return;
    }

    await interaction.reply(
      moment().tz(timezone.name).format('YYYY-MM-DD hh:mm:ss a'),
    );
  }

  private getTimezone(query: string) {
    return (
      tzList.find((tz) => tz.abbr === String(query).toUpperCase())?.zoneId
      ?? query
    );
  }
}
