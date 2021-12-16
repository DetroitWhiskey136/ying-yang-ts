export interface IAdmins {
  id: string;
}

export interface ISupport {
  id: string;
}

export interface ISettings {
  admins: IAdmins[];
  support: ISupport[];
  guilds: number;
  restart: boolean;
}

export const Settings: ISettings = {
  admins: [],
  guilds: 0,
  restart: false,
  support: [],
};
