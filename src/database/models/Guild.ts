import { OPTIONS, stringResolvable, booleanResolvable } from 'src/util';

export interface Guild {
  prefix: stringResolvable;
  log: stringResolvable;
  joinMessage: stringResolvable;
  leaveMessage: stringResolvable;
  welcomeChannel: stringResolvable;
}

const GuildSchema: Guild = {
  prefix: '/',
  log: null,
  joinMessage: null,
  leaveMessage: null,
  welcomeChannel: null,
};

export default GuildSchema;
