import fs from 'fs';
import path from 'path';

import { EnmapProvider } from '../database/EnmapProvider';
import {
  ISettings, IGuild, IUser, IMember,
} from './models';

const dataDir = `${process.cwd()}${path.sep}${path.join('data', 'enmap_data')}`;

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export class Database {
  settings: EnmapProvider<ISettings> = new EnmapProvider({ dataDir, name: 'settings' });

  guilds: EnmapProvider<IGuild> = new EnmapProvider({ dataDir, name: 'guilds' });

  users: EnmapProvider<IUser> = new EnmapProvider({ dataDir, name: 'users' });

  members: EnmapProvider<IMember> = new EnmapProvider({ dataDir, name: 'members' });
}
