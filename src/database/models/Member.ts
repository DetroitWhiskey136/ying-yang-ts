export interface IMemberWarning {
    [ x: string ]: any;
    id: string;
    reason: string;
    points: number;
    moderator: string;
}

export interface IMemberGuild {
  warnings: IMemberWarning;
  dj: boolean;
  level: number;
}

export interface IMember {
  guilds: { [id: string]: IMemberGuild };
}

export const Member: IMember = {
  guilds: {},
};
