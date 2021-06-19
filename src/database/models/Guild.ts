import { stringResolvable } from '../../util';

export interface IGuild {
  autoFormatUsernames: boolean;
  prefix: stringResolvable;
  log: stringResolvable;
  joinMessage: stringResolvable;
  leaveMessage: stringResolvable;
  welcomeChannel: stringResolvable;
}

export const Guild: IGuild = {
  autoFormatUsernames: false,
  joinMessage: null,
  leaveMessage: null,
  log: null,
  prefix: '/',
  welcomeChannel: null,
};
