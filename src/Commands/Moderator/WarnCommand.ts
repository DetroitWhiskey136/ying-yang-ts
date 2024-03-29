import { Snowflake } from 'discord.js';
import { Core } from '../../index';

export class WarnCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      aliases: [],
      category: Core.Handler.Commands.CommandCategories.MODERATOR,
      description: 'Gives a user a warning',
      enabled: true,
      name: 'warn',
      permission: Core.Managers.Permissions.PermissionLevel.MODERATOR,
      usage: 'warn <user> [points] [reason]',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext) {
    const {
      author, member, args, guild, channel, mentions,
    } = ctx;

    if (guild === null) {
      return;
    }

    if (args.length === 0) {
      await channel.send('Please specify a member to warn.');
      return;
    }

    const userOption = args[0];
    const target = guild.members.resolve(userOption as Snowflake)
      ?? mentions.members?.first?.();

    if (target == null) {
      await channel.send('Cannot resolve a member with a given option.');
      return;
    }

    let points: number = 0;
    const isPointProvided = !Number.isNaN(Number(args[1]))
      && Number(args[1]) === parseInt(args[1], 10);
    if (isPointProvided) {
      points = Number(args[1]);
    }
    if (points < 0) {
      await channel.send(
        'A warning point must be a number greater or equal to 0',
      );
      return;
    }

    let reason = 'No reason provided';
    if (args[isPointProvided ? 2 : 1] !== undefined) {
      reason = args.slice(isPointProvided ? 2 : 1).join(' ');
    }

    await target.warnings.add(reason, points, member);
    const embed = new Core.Discord.Embed()
      .setAuthor({
        iconURL: `${target.user.username} has been warned`,
        name: target.user.displayAvatarURL({ dynamic: true }),

      })
      .addField('Moderator', `${author}`, false)
      .addField('Reason', reason, false)
      .setFooter({ text: `${points} warning point${points !== 1 ? 's' : ''}` });
    await channel.send({ embeds: [embed] });
  }
}
