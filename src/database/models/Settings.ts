export interface Admins {
  id: string;
}

export interface Support {
  id: string;
}

export interface Settings {
  admins: Admins[];
  support: Support[];
  guilds: number;
  restart: boolean;

}

const SettingsSchema: Settings = {
  admins: [],
  guilds: 0,
  restart: false,
  support: [],
};

export default SettingsSchema;
