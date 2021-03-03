import {
  booleanResolvable, numberResolvable,
} from '@util/Constants';

export interface User {
  botAdmin: booleanResolvable;
  botSupport: booleanResolvable
  level: numberResolvable;
}

export const UserSchema: User = {
  botAdmin: false,
  botSupport: false,
  level: 0,
};
