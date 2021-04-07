import fs from 'fs';
import path from 'path';

import { EnmapProvider } from '../database/EnmapProvider';
import {
  Settings, settings, Guild, guilds, User, users, Member, members,
} from './models';

const dataDir = `${process.cwd()}${path.sep}${path.join('data', 'enmap_data')}`;

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

export class Database {
  settings: EnmapProvider<Settings> = new EnmapProvider({ dataDir, name: 'settings' });

  guilds: EnmapProvider<Guild> = new EnmapProvider({ dataDir, name: 'guilds' });

  users: EnmapProvider<User> = new EnmapProvider({ dataDir, name: 'users' });

  members: EnmapProvider<Member> = new EnmapProvider({ dataDir, name: 'members' });
}
