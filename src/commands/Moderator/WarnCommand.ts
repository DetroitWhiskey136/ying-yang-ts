import { CommandContext } from '../../command/CommandContext';
import { CommandError } from '../../command/CommandError';
import {
  BotClient, Embed, Command, MemberUtil,
} from '../../index';

export class WarnCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: [],
      category: 'Moderator',
      description: 'Gives a user a warning',
      enabled: true,
      guildOnly: true,
      name: 'warn',
      usage: 'warn <user> <points> <reason>',
    }, []);
  }

  // eslint-disable-next-line consistent-return
  run(ctx: CommandContext) {
    const {
      author, args, client, database, guild, member, bot, channel, mentions,
    } = ctx;
    const [user, points, ...reason] = args;
    const embed = new Embed();

    const mem = MemberUtil.parseMemberFromID(user, guild!)
      ?? MemberUtil.parseMemberFromMention(mentions, guild!);
    // const mem = guild?.members.cache.get(user);

    if (!mem) return bot.logger.error('Member is not defined');
    if (user) {
      if (points) {
        if (reason) {
          mem.warnings.add(reason.join(' '), parseInt(points, 2), member);
          embed
            .setDescription(`${mem.user.username} has been warned, \n${reason.join(' ')}`)
            .setFooter(`Warned by: ${member?.displayName}`)
            .setTimestamp();

          channel.send(embed);
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
