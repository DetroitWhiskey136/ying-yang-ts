import { RoleResolvable } from 'discord.js';
import { stringResolvable } from '../../util';

export interface IRoles {
  admin: RoleResolvable;
  moderator: RoleResolvable;
  support: RoleResolvable;
  dj: RoleResolvable;
}

export interface IGuild {
  autoFormatUsernames: boolean;
  prefix: stringResolvable;
  log: stringResolvable;
  joinMessage: stringResolvable;
  leaveMessage: stringResolvable;
  welcomeChannel: stringResolvable;
  roles: IRoles;
}

export const Guild: IGuild = {
  autoFormatUsernames: false,
  joinMessage: null,
  leaveMessage: null,
  log: null,
  prefix: '/',
  roles: {
    admin: '',
    dj: '',
    moderator: '',
    support: '',
  },
  welcomeChannel: null,
};
