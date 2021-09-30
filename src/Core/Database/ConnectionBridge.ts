import fs from 'fs';
import path from 'path';

import { Database } from '..';

const dataDir = `${process.cwd()}${path.sep}${path.join('data', 'enmap_data')}`;

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export class ConnectionBridge {
  settings: Database.EnmapProvider<Database.Models.Settings.ISettings> =
    new Database.EnmapProvider({ dataDir, name: 'settings' });

  guilds: Database.EnmapProvider<Database.Models.Guild.IGuild> =
    new Database.EnmapProvider({ dataDir, name: 'guilds' });

  users: Database.EnmapProvider<Database.Models.User.IUser> =
    new Database.EnmapProvider({ dataDir, name: 'users' });

  members: Database.EnmapProvider<Database.Models.Member.IMember> =
    new Database.EnmapProvider({ dataDir, name: 'members' });
}
