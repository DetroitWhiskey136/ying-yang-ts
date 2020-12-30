import CommandContext from '../CommandContext';
import CommandError from '../CommandError';
import { ParameterTypes } from './types';
import Parameter, { ParameterOptions } from './types/Parameter';

declare interface CommandsParameterOptions {
  flags: any;
  parameters: Array<Parameter>;
}

const isNull = (n: any) => n === null || n === undefined;

const funcOrString = (f: any, ...args: any) => (typeof f === 'function' ? f(...args) : f);

const normalizeParam = (options: any) => {
  const types = options.type.split('|');
  const parameters = [];
  // eslint-disable-next-line guard-for-in ,no-restricted-syntax
  for (const i in types) {
    const entry = types[i];
    const type = ParameterTypes[entry] || entry;
    if (!type || !(type.prototype instanceof Parameter)) throw new TypeError('Invalid parameter type');
    // eslint-disable-next-line no-param-reassign
    options = { ...type.parseOptions(i), ...options };
    parameters.push(type);
  }
  return { moreParams: parameters.length > 1, ...options, types: parameters };
};

class CommandParameters {
  constructor() {
    throw new Error(`This ${this.constructor.name} class may not be instantiated`);
  }

  static parseOptions(params: any) {
    const { length } = params;
    const hasFlags = Array.isArray(params[length - 1]);
    return {
      flags: hasFlags ? params[length - 1].map(normalizeParam) : null,
      parameters: (hasFlags ? params.slice(0, length - 1) : params).map(normalizeParam),
    };
  }

  /**
   * Triggers options parser, the flag handler and the argument handler.
   * @param {CommandContext} context The command context.
   * @param {Object} options The options.
   * @param {string[]} args Array of the command args.
   * @returns {Object[]} The handled arguments.
   */
  static async handle(context: CommandContext, options: object, args: string[]): Promise<string[]> {
    const opts = this.parseOptions(options);
    await this.handleFlags(context, opts, args);
    return this.handleArguments(context, opts, args);
  }

  /**
   * Handles the flags.
   * @param {CommandContext} context The command context.
   * @param {Object} opts The options.
   * @param {string[]} args Array of the command args.
   * @returns {void}
   */
  static async handleFlags(
    context: CommandContext, opts: CommandsParameterOptions, args: string[],
  ) {
    if (opts.flags) {
      const flagIndex = args.findIndex((a) => a.startsWith('--'));
      if (flagIndex > -1) {
        const [, ...allFlags] = args.splice(flagIndex).join(' ').split('--');
        const flagsObject: any = {};

        const flagsParsed = allFlags.map((s) => s.trim().split(/[ \t]+/));
        for (let i = 0; i < flagsParsed.length; i++) {
          const [name, ...flagArgs] = flagsParsed[i];
          const flag = opts.flags.find(
            (f: any) => f.name === name || (f.aliases && f.aliases.includes(name)),
          );
          if (!flag) return;

          const flagValue = flagArgs.join(' ');
          const missingErr = funcOrString(flag.missingError, context);
          // eslint-disable-next-line no-await-in-loop
          flagsObject[flag.name] = await this.parseParameter(context, flag, flagValue, missingErr);
        }
        context.flags = flagsObject;
      }
    }
  }

  /**
   * Handles the arguments.
   * @param {CommandContext} context The command context
   * @param {Object} opts The options.
   * @param {string[]} args The arguments.
   * @returns {Object[]} The parsed arguments
   */
  static async handleArguments(
    context: CommandContext, opts: CommandsParameterOptions, args: string[],
  ): Promise<string[]> {
    const parsedArgs:string[] = [];

    // eslint-disable-next-line no-multi-assign
    const parseState = context.parseState = { argIndex: 0 };
    for (let i = 0; i < opts.parameters.length; i++) {
      const param = opts.parameters[i];

      let arg = args[parseState.argIndex];
      if (
        opts.parameters.length > args.length
        && !param.required && parseState.argIndex === args.length - 1
        && opts.parameters.some((p: any, pi: any) => pi > i && p.required)
      ) {
        parsedArgs.push();
        // eslint-disable-next-line no-continue
        continue;
      }

      if (param.full) arg = args.slice(parseState.argIndex).join(param.fullJoin || ' ');

      // eslint-disable-next-line no-await-in-loop
      const parsedArg = await this.parseParameter(
        context, param, arg, funcOrString(param.missingError, context),
      );
      parsedArgs.push(parsedArg);
      parseState.argIndex++;
    }
    delete context.parseState;

    return parsedArgs;
  }

  /**
   * Parses a parameter
   * @param {CommandContext} context The command context.
   * @param {Object} param The parameter.
   * @param {string} arg The query.
   * @param {string} missingErr The error to throw whenever the parse fails.
   * @returns {string} parsedArgs
   */
  static async parseParameter(
    context: CommandContext, param: ParameterOptions,
    arg: string, missingErr: string,
  ): Promise<string> {
    let parsedArg;
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const parameter of param.types) {
      // eslint-disable-next-line no-await-in-loop
      const result = await parameter._parse(arg, context, param);
      if (!isNull(result)) {
        parsedArg = result;
        break;
      }
    }

    if (isNull(parsedArg) && param.required) {
      throw new CommandError(missingErr, { delete: true });
    }

    if (!isNull(parsedArg)) {
      if (param.whitelist) {
        const whitelist = funcOrString(param.whitelist, parsedArg, context);
        const whitelisted = Array.isArray(whitelist) ? whitelist.includes(parsedArg) : !!whitelist;
        if (!whitelisted) {
          throw new CommandError(missingErr, { delete: true });
        }
      }
    }

    return parsedArg;
  }
}

export default CommandParameters;
