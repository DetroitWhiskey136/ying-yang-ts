import { Snowflake } from 'discord.js';
import moment from 'moment';
import 'moment-timezone';
import tzList from '../../../data/resources/timezone-list.json';
import { Core } from '../../index';

export class TimeCommand extends Core.Handler.Command.Command {
  constructor() {
    super({
      category: Core.Handler.Command.CommandCategories.GENERAL,
      description: 'Sets the authors timezone that can be gotten through time.',
      name: 'set-time',
      options: [
        {
          description:
            'The timezone you would like to set yourself in. Note: for best results use the name or abbreviation',
          name: 'timezone',
          required: false,
          type: 'STRING',
        },
      ],
      usage: 'set-time <timezone>',
    });
  }

  async runNormal(ctx: Core.Handler.Command.CommandContext) {
    //
  }

  async runSlash(ctx: Core.Handler.Command.SlashContext) {
    const { commandInteraction: interaction, bot } = ctx;
    const { options } = interaction;
    const args = {
      value: options.get('timezone')?.value,
    };

    const timezone = moment.tz.zone(this.getTimezone(args.value as string));

    if (!timezone?.name) {
      await interaction.reply('Invalid timezone is given');
      return;
    }

    bot.database.users.update(interaction.user.id as Snowflake, {
      timezone: timezone!.name,
    });
    await interaction.reply(
      moment().tz(timezone!.name).format('YYYY-MM-DD hh:mm:ss a'),
    );
  }

  private getTimezone(query: string) {
    return (
      tzList.find((tz) => tz.abbr === String(query).toUpperCase())?.zoneId
      ?? query
    );
  }
}
