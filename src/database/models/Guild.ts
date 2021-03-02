import { stringResolvable } from '@util/Constants';

export interface Guild {
  prefix: stringResolvable;
  log: stringResolvable;
  joinMessage: stringResolvable;
  leaveMessage: stringResolvable;
  welcomeChannel: stringResolvable;
}

const GuildSchema: Guild = {
  joinMessage: null,
  leaveMessage: null,
  log: null,
  prefix: '/',
  welcomeChannel: null,
};

export default GuildSchema;
