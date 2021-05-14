/* eslint-disable no-param-reassign */
import { Util } from 'discord.js';
import { CommandContext } from '../../CommandContext';
import { CommandError } from '../../CommandError';
import { Parameter } from './Parameter';

export declare interface StringOptions {
  clean: boolean;
  regex: any;
  forceLowerCase: boolean;
  forceUpperCase: boolean;
  maxLength: number;
  truncate: boolean;
}

export interface StringParameter {
  clean: boolean;
  errorRegex: any;
  forceLowerCase: boolean;
  forceUpperCase: boolean;
  maxLength: number;
  truncate: boolean;
}

export class StringParameter extends Parameter {
  static clean: boolean;

  static errorRegex: any;

  static forceLowerCase: boolean;

  static forceUpperCase: boolean;

  static maxLength: number;

  static truncate: boolean;

  static errors: any;

  static parseOptions(options: StringOptions) {
    return {
      ...super.parseOptions(options),
      clean: !!options.clean,
      errorRegex: options.regex,
      forceLowerCase: !!options.forceLowerCase,
      forceUpperCase: !!options.forceUpperCase,
      maxLength: Number(options.maxLength) || 0,
      truncate: !!options.truncate,
    };
  }

  /**
   * @param {string} arg The argument.
   * @param {CommandContext} ctx The context of this argument.
   * @returns {?string} string
   */
  static parse(arg: string | null, ctx: CommandContext) {
    const { message } = ctx;
    arg = arg ? typeof arg === 'string' ? arg : String(arg) : null;
    if (!arg) return null;

    if (this.clean) arg = Util.cleanContent(arg, message.channel);

    if (this.maxLength > 0 && arg.length > this.maxLength) {
      if (!this.truncate) throw new CommandError(`The string you inputted was too big (Max: ${this.maxLength})`, {});
      arg = arg.substring(0, this.maxLength);
    }

    if (this.errorRegex && this.errorRegex.test(arg)) throw new CommandError(this.errors.regex, {});
    if (this.forceUpperCase) arg = arg.toUpperCase();
    if (this.forceLowerCase) arg = arg.toLowerCase();

    return arg;
  }
}
