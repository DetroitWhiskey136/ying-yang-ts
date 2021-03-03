import { stringResolvable } from '@util/Constants';

export interface Guild {
  prefix: stringResolvable;
  log: stringResolvable;
  joinMessage: stringResolvable;
  leaveMessage: stringResolvable;
  welcomeChannel: stringResolvable;
}

export const GuildSchema: Guild = {
  joinMessage: null,
  leaveMessage: null,
  log: null,
  prefix: '/',
  welcomeChannel: null,
};
