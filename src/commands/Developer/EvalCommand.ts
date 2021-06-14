/* eslint-disable no-eval, no-unused-vars */
import { execSync } from 'child_process';
import { inspect } from 'util';
import {
  YinYangCommand, Embed, Logger, Strings, Util,
} from '../../index';
import { Stopwatch } from '../../util/Stopwatch';
import { Type } from '../../util/Type';

const { isEmpty, isPromise } = Util;
const { code } = Strings;

const token = process.env.TOKEN || '';
const value = (str: string) => code(str, 'js').replace(token, () => '*'.repeat(20));
const hrToSeconds = (hrtime: [number, number]) => (hrtime[0] + (hrtime[1] / 1e9)).toFixed(3);
const exec = (c: any) => execSync(c).toString();

export class EvalCommand extends YinYangCommand.Command {
  constructor() {
    super({
      aliases: ['compile', 'ev', 'js'],
      category: YinYangCommand.CommandCategories.DEVELOPER,
      description: 'Evaluates arbitrary javascript code',
      name: 'eval',
      usage: 'eval <expression>',
    });
  }

  async runNormal(ctx: YinYangCommand.CommandContext) {
    const {
      bot, message, mentions, member, guild, author, channel, client,
      prefix, query, args, database,
    } = ctx;

    if (!author.botAdmin && !['574074150327418893', '190324299083546624'].includes(author.id)) {
      return;
    }

    const embed = new Embed();
    let res;

    const toEval = query.replace(/(^`{3}(\w+)?|`{3}$)/gim, () => '');

    const cleanResult = async (evaluated: unknown, stopwatch: Stopwatch) => {
      const resolved = await evaluated;

      const inspected = inspect(resolved, { depth: 0, showHidden: true });
      const cleanEvaluated = value(this.clean(inspected));

      const type = new Type(resolved);
      const summary = `**Type:** ${type}\n**Executed in** ${stopwatch.toString()}`;
      return `**${isPromise(evaluated) ? 'Promise ' : ''}Result**\n\n${summary} ${cleanEvaluated}`;
    };

    try {
      const stopwatch = new Stopwatch();
      const evaluated = eval(toEval);
      res = await cleanResult(evaluated, stopwatch);
    } catch (err) {
      if (['await is only valid in async function', 'await is not defined'].includes(err.message)) {
        try {
          const stopwatch = new Stopwatch();
          res = await cleanResult(eval(`(async () => {\n${toEval}\n})()`), stopwatch);
        } catch (er) {
          client.emit('error', er);
          res = `Error: ${value(this.clean(er.message))}`;
        }
      } else {
        client.emit('error', err);
        res = `Error: ${value(this.clean(err.message))}`;
      }
    } finally {
      embed.setDescription(String(res));
      await channel.send({ embeds: [embed] });
    }
  }

  clean(str: string) {
    const blankSpace = String.fromCharCode(8203);
    return typeof str === 'string' ? str.replace(/`/g, `\`${blankSpace}`).replace(/@/g, `@${blankSpace}`) : str;
  }
}
