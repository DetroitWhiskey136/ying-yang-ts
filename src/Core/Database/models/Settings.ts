export interface IRestart {
  isRestart: boolean;
  message: string;
  channel: string;
}

export interface ISettings {
  guilds: number;
  restart: IRestart;
}

export const Settings: ISettings = {
  guilds: 0,
  restart: {
    channel: '',
    isRestart: false,
    message: '',
  },
};
