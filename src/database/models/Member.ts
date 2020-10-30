export interface MemberWarning {
  id: string;
  reason: string;
  points: number;
  moderator: string;
}

export interface MemberWarningGuild {
  warnings: MemberWarning | null;
  dj: boolean;
  level: number;
}

export interface Member {
  guilds: MemberWarningGuild | null;
}

const MemberSchema: Member = {
  guilds: null,
};

export default MemberSchema;
