import EnmapProvider from '../database/EnmapProvider';
import {
  Settings,
  Guild,
  User,
  Member,
} from './models';

class Database {
  public settings: EnmapProvider<Settings> = new EnmapProvider('settings');

  public guilds: EnmapProvider<Guild> = new EnmapProvider('guilds');

  public users: EnmapProvider<User> = new EnmapProvider('users');

  public members: EnmapProvider<Member> = new EnmapProvider('members');
}

export default Database;
