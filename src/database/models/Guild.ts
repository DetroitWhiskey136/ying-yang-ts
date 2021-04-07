import { stringResolvable } from '../../index';

export interface IGuild {
  prefix: stringResolvable;
  log: stringResolvable;
  joinMessage: stringResolvable;
  leaveMessage: stringResolvable;
  welcomeChannel: stringResolvable;
}

export const Guild: IGuild = {
  joinMessage: null,
  leaveMessage: null,
  log: null,
  prefix: '/',
  welcomeChannel: null,
};
