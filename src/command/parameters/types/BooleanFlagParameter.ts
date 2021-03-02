import Parameter from './Parameter';

class BooleanFlagParameter extends Parameter {
  static parse() {
    return true;
  }
}

export default BooleanFlagParameter;
