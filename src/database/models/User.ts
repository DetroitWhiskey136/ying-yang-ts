import {
  booleanResolvable, numberResolvable,
} from '../../util';

export interface IUser {
  botAdmin: booleanResolvable;
  botSupport: booleanResolvable
  level: numberResolvable;
}

export const User: IUser = {
  botAdmin: false,
  botSupport: false,
  level: 0,
};
