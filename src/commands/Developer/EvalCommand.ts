/* eslint-disable no-eval, no-unused-vars */
import { inspect } from 'util';
import {
  YinYangCommand, Embed, Strings, Util, YinYangPermissions,
} from '../../index';
import { Stopwatch } from '../../util/Stopwatch';
import { Type } from '../../util/Type';

const { isPromise } = Util;
const { code } = Strings;

const token = process.env.TOKEN ?? '';
const value = (str: string) => code(str, 'js')
  .replace(token, () => '*'.repeat(token.length));

export class EvalCommand extends YinYangCommand.Command {
  constructor() {
    super({
      aliases: ['compile', 'ev', 'js'],
      category: YinYangCommand.CommandCategories.DEVELOPER,
      description: 'Evaluates arbitrary javascript code',
      name: 'eval',
      permission: YinYangPermissions.PermissionLevel.BOT_DEVELOPER,
      usage: 'eval <expression>',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    const {
      bot, message, mentions, member, guild, author, channel, client,
      prefix, query, args, database,
    } = ctx;

    const box = {
      BC: '─',
      BL: '╰',
      BR: '╯',
      MC: '─',
      ML: '├',
      MN: '│',
      MR: '┤',
      TC: '─',
      TL: '╭',
      TR: '╮',
    };

    const strings = [
      ` Content: ${message.content ?? 'N/A'}`,
      ` Guild: ${guild?.name}(${guild?.id})`,
      ` Channel: ${channel?.type === 'GUILD_TEXT' ? channel?.name : 'N/A'}(${channel.id})`,
      ` Member: ${member?.displayName}(${member?.id})`,
    ];

    bot.logger.info(
      '\n',
      `${box.TL}${box.TC.repeat(65)}${box.TR}\n`,
      `${box.MN}${' '.repeat(28)}Eval Used${' '.repeat(28)}${box.MN}\n`,
      `${box.ML}${box.MC.repeat(65)}${box.MR}\n`,
      `${box.MN}${strings[0].slice(0, 64)}${' '.repeat(65 - (strings[0].slice(0, 64).length))}${box.MN}\n`,
      `${box.MN}${strings[1].slice(0, 64)}${' '.repeat(65 - (strings[1].slice(0, 64).length))}${box.MN}\n`,
      `${box.MN}${strings[2].slice(0, 64)}${' '.repeat(65 - (strings[2].slice(0, 64).length))}${box.MN}\n`,
      `${box.MN}${strings[3].slice(0, 64)}${' '.repeat(65 - (strings[3].slice(0, 64).length))}${box.MN}\n`,
      `${box.BL}${box.BC.repeat(65)}${box.BR}`,
    );

    const embed = new Embed();
    let res;

    const toEval = query.replace(/(^`{3}(\w+)?|`{3}$)/gim, () => '');

    const cleanResult = async (evaluated: unknown, stopwatch: Stopwatch) => {
      const resolved = await evaluated;
      const inspected = inspect(resolved, { depth: 0, showHidden: true });
      const cleanEvaluated = value(this.clean(inspected));

      const type = new Type(resolved);
      const summary = `**Type:** ${type}\n**Executed in** ${stopwatch.toString()}`;
      return `${isPromise(evaluated) ? '**Awaited Promise**\n' : ''}${summary} ${cleanEvaluated}`;
    };

    try {
      const stopwatch = new Stopwatch();
      const evaluated = eval(toEval);
      res = await cleanResult(evaluated, stopwatch);
    } catch (err: any) {
      if (err.message.includes('await is only valid in async functions')) {
        try {
          const stopwatch = new Stopwatch();
          res = await cleanResult(eval(`(async () => {\n${toEval}\n})()`), stopwatch);
        } catch (er: any) {
          client.emit('error', er);
          res = `**Exception** ${value(this.clean(er.message))}`;
        }
      } else {
        client.emit('error', err);
        res = `**Exception** ${value(this.clean(err.message))}`;
      }
    } finally {
      embed.setDescription(String(res));
      await channel.send({ embeds: [embed] });
    }
  }

  clean(str: string) {
    const blankSpace = String.fromCharCode(8203);
    return str.replace(/`/g, `\`${blankSpace}`)
      .replace(/@/g, `@${blankSpace}`);
  }
}
