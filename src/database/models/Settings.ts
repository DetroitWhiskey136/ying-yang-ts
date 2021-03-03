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

export const SettingsSchema: Settings = {
  admins: [],
  guilds: 0,
  restart: false,
  support: [],
};
