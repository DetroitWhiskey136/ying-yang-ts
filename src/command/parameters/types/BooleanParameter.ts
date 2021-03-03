import { CommandError } from '../../CommandError';
import Parameter from './Parameter';

export declare interface BooleanOptions {
  falseValues: string[];
  trueValues: string[];
}

class BooleanParameter extends Parameter {
  static falseValues: string[];

  static trueValues: string[];

  static parseOptions(options: BooleanOptions) {
    return {
      ...super.parseOptions(options),
      falseValues: options.falseValues || ['false', 'no', 'off'],
      trueValues: options.trueValues || ['true', 'yes', 'on'],
    };
  }

  /**
   * @param {string} arg The argument's query.
   * @returns {boolean}
   */

  /**
   * @static
   * @param {string} arg The argument's query.
   * @returns {boolean} The returned value.
   * @memberof BooleanParameter
   */
  static parse(arg: string) {
    if (!this.trueValues.concat(this.falseValues).includes(arg)) throw new CommandError('Invalid value', {});
    return this.trueValues.includes(arg);
  }
}

export default BooleanParameter;
