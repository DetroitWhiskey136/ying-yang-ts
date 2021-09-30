import { RoleResolvable } from 'discord.js';
import { Util } from '../..';

export interface IRoles {
  admin: RoleResolvable;
  moderator: RoleResolvable;
  support: RoleResolvable;
  dj: RoleResolvable;
}

export interface IGuild {
  autoFormatUsernames: boolean;
  prefix: Util.Constants.stringResolvable;
  log: Util.Constants.stringResolvable;
  joinMessage: Util.Constants.stringResolvable;
  leaveMessage: Util.Constants.stringResolvable;
  welcomeChannel: Util.Constants.stringResolvable;
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
