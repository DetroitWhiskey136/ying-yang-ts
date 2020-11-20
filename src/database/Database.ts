import fs from 'fs';
import path from 'path';
import Enmap from 'enmap';

import EnmapProvider from '../database/EnmapProvider';
import {
  Settings, settings, Guild, guilds, User, users, Member, members,
} from './models';

const dataDir = `${process.cwd()}${path.sep}${path.join('data', 'enmap_data')}`;

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// #region Scope Declaration
// #endregion

class Database {
  // #region Type Declarations
  settings: EnmapProvider<Settings> = new EnmapProvider(new Enmap('settings', { dataDir }));

  guilds: EnmapProvider<Guild> = new EnmapProvider(new Enmap('guilds', { dataDir }));

  users: EnmapProvider<User> = new EnmapProvider(new Enmap('users', { dataDir }));

  members: EnmapProvider<Member> = new EnmapProvider(new Enmap('members', { dataDir }));
  // #endregion

  // #region Constructor
  // #endregion

  // #region Methods
  // #endregion
}

export default Database;
