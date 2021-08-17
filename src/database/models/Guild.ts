import { RoleResolvable } from 'discord.js';
import { stringResolvable } from '../../index';

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
  queue: [];
}

export const Guild: IGuild = {
  autoFormatUsernames: false,
  joinMessage: null,
  leaveMessage: null,
  log: null,
  prefix: ':',
  queue: [],
  roles: {
    admin: '' as RoleResolvable,
    dj: '' as RoleResolvable,
    moderator: '' as RoleResolvable,
    support: '' as RoleResolvable,
  },
  welcomeChannel: null,
};
