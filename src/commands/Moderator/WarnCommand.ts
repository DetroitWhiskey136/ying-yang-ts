import { Snowflake } from 'discord.js';
import {
  Embed, YinYangCommand, MemberUtil,
} from '../../index';

export class WarnCommand extends YinYangCommand.Command {
  constructor() {
    super({
      aliases: [],
      category: YinYangCommand.CommandCategories.MODERATOR,
      description: 'Gives a user a warning',
      enabled: true,
      name: 'warn',
      usage: 'warn <user> <points> <reason>',
    });
  }

  // eslint-disable-next-line consistent-return
  async runNormal(ctx: YinYangCommand.CommandContext) {
    const {
      author, args, client, database, guild, member, bot, channel, mentions,
    } = ctx;
    const [user, points, ...reason] = args;
    const embed = new Embed();

    const mem = MemberUtil.parseMemberFromID(user as Snowflake, guild!)
      ?? MemberUtil.parseMemberFromMention(mentions, guild!);
    // const mem = guild?.members.cache.get(user);

    if (!mem) return bot.logger.error('Member is not defined');
    if (user) {
      if (points) {
        if (reason) {
          await mem.warnings.add(reason.join(' '), parseInt(points, 2), member);
          embed
            .setDescription(`${mem.user.username} has been warned, \n${reason.join(' ')}`)
            .setFooter(`Warned by: ${member?.displayName}`)
            .setTimestamp();

          channel.send({ embed });
        } else {
          bot.logger.error('reason is not defined');
        }
      } else {
        bot.logger.error('points is not defined');
      }
    } else {
      bot.logger.error('user is not defined');
    }
  }
}
