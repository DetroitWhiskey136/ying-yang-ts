export interface MemberWarning {
    [ x: string ]: any;
    id: string;
    reason: string;
    points: number;
    moderator: string;
}

export interface MemberGuild {
  warnings: MemberWarning;
  dj: boolean;
  level: number;
}

export interface Member {
  guilds: { [id: string]: MemberGuild };
}

export const MemberSchema: Member = {
  guilds: {},
};
