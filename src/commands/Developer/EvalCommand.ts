/* eslint-disable no-eval, no-unused-vars */
import { execSync } from 'child_process';
import { inspect } from 'util';
import { CommandContext } from '../../command/CommandContext';
import {
  BotClient, Command, Embed, Logger, Strings, Util,
} from '../../index';

const { isEmpty, isPromise } = Util;
const { code } = Strings;

const token = process.env.TOKEN || '';
const value = (str: string) => code(str, 'js').replace(token, () => '*'.repeat(20));
const hrToSeconds = (hrtime: [number, number]) => (hrtime[0] + (hrtime[1] / 1e9)).toFixed(3);
const exec = (c: any) => execSync(c).toString();

export class EvalCommand extends Command {
  constructor(bot: BotClient) {
    super(bot, {
      aliases: ['compile', 'ev', 'js'],
      category: 'Developer',
      description: 'Evaluates arbitrary javascript code',
      enabled: true,
      guildOnly: false,
      name: 'eval',
      usage: 'eval <code>',
    }, []);
  }

  async run(ctx: CommandContext) {
    const {
      bot, message, mentions, member, guild, author, channel, client,
      voiceChannel, prefix, query, args, database,
    } = ctx;
    if (!author.botAdmin && author.id !== '190324299083546624') return;

    const embed = new Embed();

    let res;

    const toEval = query.replace(/(^`{3}(\w+)?|`{3}$)/gim, () => '');

    const cleanResult = async (evaluated: any, hrStart: [number, number]) => {
      const resolved = await Promise.resolve(evaluated);
      const hrDiff = process.hrtime(hrStart);

      const inspected = typeof resolved === 'string' ? resolved : inspect(query ? resolved : bot, { depth: 0, showHidden: true });
      const cleanEvaluated = value(this.clean(inspected));

      const executedIn = `Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000} ms`;
      return `${isPromise(evaluated) ? 'Promise ' : ''}Result (${executedIn}): ${cleanEvaluated}`;
    };

    try {
      const hrStart = process.hrtime();
      const evaluated = eval(toEval);
      res = await cleanResult(evaluated, hrStart);
    } catch (err) {
      if (['await is only valid in async function', 'await is not defined'].includes(err.message)) {
        try {
          const hrStart = process.hrtime();
          if (toEval.trim().split('\n').length === 1) {
            res = await cleanResult(eval(`(async () => ${toEval})()`), hrStart);
          } else res = await cleanResult(eval(`(async () => {\n${toEval}\n})()`), hrStart);
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
      await channel.send({ embed });
    }
  }

  clean(str: string) {
    const blankSpace = String.fromCharCode(8203);
    return typeof str === 'string' ? str.replace(/`/g, `\`${blankSpace}`).replace(/@/g, `@${blankSpace}`) : str;
  }
}
