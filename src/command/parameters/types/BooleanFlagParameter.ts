import { Parameter } from './Parameter';

export class BooleanFlagParameter extends Parameter {
  static parse() {
    return true;
  }
}
