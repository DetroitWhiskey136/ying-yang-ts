import { Util } from '../..';

export interface IUser {
  botAdmin: Util.Constants.booleanResolvable;
  botSupport: Util.Constants.booleanResolvable;
  botDeveloper: Util.Constants.booleanResolvable;
  level: Util.Constants.numberResolvable;
  timezone: string;
}

export const User: IUser = {
  botAdmin: false,
  botDeveloper: false,
  botSupport: false,
  level: 0,
  timezone: '',
};
