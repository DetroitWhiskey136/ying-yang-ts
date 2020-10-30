import Enmap from 'enmap';
import path from 'path';
import fs from 'fs';

import EnmapProvider from '../database/EnmapProvider';
import {
  Settings, settings, Guild, User, Member,
} from './models';

const dataDir = `${process.cwd()}${path.sep}${path.join('data', 'enmap_data')}`;

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// #region Scope Declaration

// #endregion

class Database {
  // #region Type Declarations
  public settings: EnmapProvider<Settings> = new EnmapProvider(new Enmap('settings', { dataDir }));

  public guilds: EnmapProvider<Guild> = new EnmapProvider(new Enmap('guilds', { dataDir }));

  public users: EnmapProvider<User> = new EnmapProvider(new Enmap('users', { dataDir }));

  public members: EnmapProvider<Member> = new EnmapProvider(new Enmap('members', { dataDir }));
  // #endregion

  // #region Constructor

  // #endregion

  // #region Methods

  // #endregion
}

export default Database;
