import { Snowflake } from 'discord.js';
import { Embed, YinYangCommand } from '../../index';

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

  async runNormal(ctx: YinYangCommand.CommandContext) {
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

    let points: number = 1;
    const isPointProvided = !Number.isNaN(Number(args[1]))
        && Number(args[1]) === parseInt(args[1], 10);
    if (isPointProvided) {
      points = Number(args[1]);
    }
    if (points < 1) {
      await channel.send('A warning point should be greater than 1');
      return;
    }

    let reason = 'No reason provided';
    if (args[isPointProvided ? 2 : 1] !== undefined) {
      reason = args.slice(isPointProvided ? 2 : 1).join(' ');
    }

    await target.warnings.add(reason, points, member);

    const embed = new Embed().setDescription(`${target} has been warned`)
      .addField('Reason', reason, false)
      .setFooter(`Moderator: ${author.username}`)
      .setTimestamp();
    await channel.send({ embeds: [embed] });
  }
}
