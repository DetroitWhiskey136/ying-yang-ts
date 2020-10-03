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
  support: [],
  guilds: 0,
  restart: false,
};

export default SettingsSchema;
