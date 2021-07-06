/* eslint-disable no-eval, no-unused-vars */
import { inspect } from 'util';
import {
  YinYangCommand, Embed, Strings, Util,
} from '../../index';
import { YinYangPermissions } from '../../managers/Permissions';
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
      permission: YinYangPermissions.PermisssionLevel.USER,
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
      return `${isPromise(evaluated) ? '**Awaited Promise**\n' : ''}${summary} ${cleanEvaluated}`;
    };

    try {
      const stopwatch = new Stopwatch();
      const evaluated = eval(toEval);
      res = await cleanResult(evaluated, stopwatch);
    } catch (err) {
      if (err.message.includes('await is only valid in async functions')) {
        try {
          const stopwatch = new Stopwatch();
          res = await cleanResult(eval(`(async () => {\n${toEval}\n})()`), stopwatch);
        } catch (er) {
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
