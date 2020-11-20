import { Guild, GuildMember, Collection } from 'discord.js';
import { MemberWarning } from '../database/models';
import { Warning } from '../structures';
import { StringUtil } from '../util';

declare interface GuildMemberWarningManager {
  member: GuildMember;
  guild: Guild;
  cache: Collection<string, Warning>;
}

class GuildMemberWarningManager {
  // #region Constructor
  constructor(member: GuildMember) {
    this.member = member;
    this.guild = member.guild;
    this.cache = new Collection();

    this.init();
  }
  // #endregion

  // #region Methods
  private init() {
    const member = this.member.client.bot.database.members.get(
      this.member.id,
    );

    if (member && member.guilds) {
      const { warnings } = member.guilds[this.guild.id];

      if (!warnings) return;

      warnings.forEach((warning: MemberWarning) => {
        this.cache.set(warning.id, new Warning(this.member.client, warning, this.member));
      });
    }
  }

  public add(reason: string, points: number, moderator: GuildMember) {
    const db = this.member.client.bot.database;
    const { warnings } = db.members.get(this.member.id).guilds[this.guild.id];

    let id = StringUtil.makeID(18);
    while (this.cache && this.cache.has(id)) {
      id = StringUtil.makeID(18);
    }

    warnings.push(
      {
        id,
        moderator: moderator.id,
        points,
        reason,
      },
    );
    db.members.update(this.member.id, {
      guilds: {
        [this.guild.id]: {
          warnings,
        },
      },
    });

    this.init();
    return this.member.warnings.cache.get(id);
  }

  public remove(id: string) {
    const db = this.member.client.bot.database;
    let { warnings } = db.members.model.get(this.member.id).guilds[this.guild.id];

    if (!warnings) return `Error: [${this.member.user.username}(${this.member.id})] does not have any warnings in [${this.guild.name}(${this.guild.id})]`;

    const warning = warnings.filter((warning: MemberWarning) => warning.id === id);

    if (warning.length === 0) return `Error: warning id not found: ID '${id}'`;

    warnings = warnings.filter((warning: MemberWarning) => warning.id !== id);

    db.members.model.delete(
      this.member.id,
      `guilds[${this.guild.id}].warnings[${warning}]`,
    );

    this.init();

    return this.member.warnings.cache;
  }

  private update(id: string, data?: MemberWarning) {
    const db = this.member.client.bot.database;
    const { warnings } = db.members.get(this.member.id).guilds[this.guild.id];

    const warning = warnings.filter((warning: MemberWarning) => warning.id === id);

    if (warning.length === 0) return `Error: warning does not exist with id: ID '${id}'`;

    db.members.model.delete(
      this.member.id,
      `guilds[${this.guild.id}].warnings[${warning}]`,
    );

    warnings.push(
      {
        id,
        moderator: data?.moderator,
        points: data?.points || warning.points,
        reason: data?.reason || warning.reason,
      },
    );
    db.members.update(this.member.id, {
      guilds: {
        [this.guild.id]: {
          warnings,
        },
      },
    });

    this.init();
    return this.member.warnings.cache.get(id);
  }
  // #endregion
}

export default GuildMemberWarningManager;
