import {
  booleanResolvable, numberResolvable,
} from '../../util';

export interface IUser {
  botAdmin: booleanResolvable;
  botSupport: booleanResolvable;
  botDeveloper: booleanResolvable;
  level: numberResolvable;
}

export const User: IUser = {
  botAdmin: false,
  botDeveloper: false,
  botSupport: false,
  level: 0,
};
