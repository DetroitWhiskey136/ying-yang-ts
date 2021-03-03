import { CommandContext } from '../../CommandContext';

export declare interface ParameterOptions {
  types?: any;
  aliases?: string[],
  full?: boolean,
  fullJoin?: string,
  missingError?: string,
  name?: string,
  required?: boolean,
  showUsage?: boolean,
  whitelist?: string[],
}

declare interface Parameter {
  types?: any;
  aliases?: string[],
  full?: boolean,
  fullJoin?: string,
  missingError?: string,
  name?: string,
  required?: boolean,
  showUsage?: boolean,
  whitelist?: string[],
}

const defVal = (o: any, k: any, d: any) => (typeof o[k] === 'undefined' ? d : o[k]);

class Parameter {
  static parseOptions(options: ParameterOptions | any = {}) {
    return {
      aliases: options.aliases,
      full: !!options.full,
      fullJoin: options.fullJoin,
      missingError: options.missingError || 'Couldn\'t obtain one of the parameters',
      name: options.name,
      required: defVal(options, 'required', true),
      showUsage: defVal(options, 'showUsage', true),
      whitelist: options.whitelist,
    };
  }

  /**
   * @param {string} arg The query of the argument.
   * @param {CommandContext} ctx The context of this argument.
   * @param {Object} [opt={}] The options for this argument
   * @returns {void}
   * @private
   */
  static _parse(arg: string, ctx: CommandContext, opt: object = {}): void {
    const options = this.parseOptions(opt);
    return this.parse.call(options, arg, ctx);
  }

  /**
   * @param {*} arg The query of the argument.
   * @param {CommandContext} ctx The commands context
   * @returns {*} Any
   */
  static parse(arg: any, ctx: CommandContext): any {
    return arg;
  }
}

export default Parameter;
