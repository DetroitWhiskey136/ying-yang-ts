/* eslint-disable import/prefer-default-export */
import { BooleanFlagParameter } from './BooleanFlagParameter';
import { BooleanParameter } from './BooleanParameter';
import { StringParameter } from './StringParameter';
import { UserParameter } from './UserParameter';

export const ParameterTypes: any = {
  boolean: BooleanParameter,
  string: StringParameter,
  user: UserParameter,
};
