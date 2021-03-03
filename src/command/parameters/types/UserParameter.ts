/* eslint-disable no-else-return */
import { User } from 'discord.js';
import { CommandContext } from '../../CommandContext';
import { CommandError } from '../../CommandError';
import Parameter from './Parameter';

type ParsedUser = User | undefined | null

declare interface OptionErrors {
  acceptBotError: string
  acceptSelfError: string,
  acceptUserError: string,
  invalidUserError: string,
}

declare interface UserParameterOptions {
  acceptBot: boolean,
  acceptSelf: boolean,
  acceptUser: boolean,
  errors: object,
  fetchGlobal: boolean,
  verifyHierarchy: boolean,
}

const MENTION_REGEX = /^(?:<@!?)?([0-9]{16,18})(?:>)?$/;

const defVal = (o: any, k: any, d: any) => (typeof o[k] === 'undefined' ? d : o[k]);

class UserParameter extends Parameter {
  static fetchGlobal: boolean;

  static moreParams: any;

  static errors: OptionErrors;

  static acceptSelf: boolean;

  static acceptBot: boolean;

  static acceptUser: boolean;

  static verifyHierarchy: boolean;

  static parseOptions(options: UserParameterOptions) {
    return {
      ...super.parseOptions(options),
      acceptBot: !!options.acceptBot,
      acceptSelf: defVal(options, 'acceptSelf', true),
      acceptUser: defVal(options, 'acceptUser', true),
      errors: {
        acceptBotError: 'You can\'t do that on a bot.',
        acceptSelfError: 'You can\'t do that on yourself.',
        acceptUserError: 'You can\'t do that on a user.',
        invalidUserError: 'Invalid user.',
        ...options.errors || {},
      },
      fetchGlobal: !!options.fetchGlobal,
      verifyHierarchy: !!options.verifyHierarchy,
    };
  }

  /**
   * @param {string} arg The argument.
   * @param {CommandContext} ctx The context of this argument.
   * @returns {?User} a user?
   */
  static async parse(arg: string, ctx: CommandContext) {
    const { guild, client, author } = ctx;
    if (!arg) return null;

    const regexResult = MENTION_REGEX.exec(arg);
    const id: string = (regexResult && regexResult[1]) || '';
    const lower = arg.toLowerCase();
    const guildMember = guild && guild.members.cache.find((m) => m.user.tag.toLowerCase() === lower
      || m.user.username.toLowerCase().includes(lower)
      || m.displayName.toLowerCase().includes(lower));

    const globalMember = client
      && client.users.cache.find((u: User) => u.tag.toLowerCase() === lower
      || u.username.toLowerCase().includes(lower));

    let user: ParsedUser = client.users.resolve(id)
      || (!!guildMember && guildMember.user)
      || globalMember;
    if (!user && this.fetchGlobal) {
      user = await client.users.fetch(id).catch(() => null);
      // if (user) user.isPartial = true;
    }

    const opts = { };
    if (!user && !this.moreParams) {
      throw new CommandError(this.errors.invalidUserError, opts);
    }

    if (!this.acceptSelf && user?.id === author.id) {
      throw new CommandError(this.errors.acceptSelfError, opts);
    }

    if (!this.acceptBot && user?.bot) {
      throw new CommandError(this.errors.acceptBotError, opts);
    }

    if (!this.acceptUser && !user?.bot) {
      throw new CommandError(this.errors.acceptUserError, opts);
    }

    if (this.verifyHierarchy) {
      /* const staffGuild = client.getGuild('STAFF');
      const member = staffGuild.member(user); // Victim
      if (!member) return user;
      const moderator = staffGuild.members.resolve(author.id); // Warner

      const trialmod = staffGuild.roles.resolve('532709860287184914');
      const mod = staffGuild.roles.resolve('427101187029073932');
      const tl = staffGuild.roles.resolve('471754425007079425');
      const adm = staffGuild.roles.resolve('431821906841305088');
      const sm = staffGuild.roles.resolve('528047437752041502');

      const has = (m: any, r: any) => m.roles.cache.has(r.id);

      let msg;

      if (
        has(moderator, sm) // Staff Manager
        || has(moderator, adm) // Admin
        || (has(moderator, tl) && has(member, tl)) // Team Leader - Team Leader
        || (has(moderator, mod) && has(member, mod)) // Moderator - Moderator
        || (has(moderator, trialmod) && has(member, trialmod)) // Trial Moderator - Trial Moderator
      ) {
        return user;
      } else if (has(moderator, trialmod) && has(member, sm)) { // Trial Moderator - Staff Manager
        msg = 'You, as a Trial Moderator, cannot warn a Staff Manager!';
      } else if (has(moderator, trialmod) && has(member, adm)) { // Trial Moderator - Admin
        msg = 'You, as a Trial Moderator, cannot warn an Admin!';
      } else if (has(moderator, trialmod) && has(member, tl)) { // Trial Moderator - Team Leader
        msg = 'You, as a Trial Moderator, cannot warn a Team Leader!';
      } else if (has(moderator, trialmod) && has(member, mod)) { // Trial Moderator - Moderator
        msg = 'You, as a Trial Moderator, cannot warn a full Moderator!';
      } else if (has(moderator, tl) && has(member, sm)) { // Team Leader - Staff Manager
        msg = 'You, as a Team Leader, cannot warn a Staff Manager!';
      } else if (has(moderator, tl) && has(member, adm)) { // Team Leader - Admin
        msg = 'You, as a Team Leader, cannot warn an Admin!';
      } else if (has(moderator, mod) && has(member, sm)) { // Moderator - Staff Manager
        msg = 'You, as a Moderator, cannot warn a Staff Manager!';
      } else if (has(moderator, mod) && has(member, adm)) { // Moderator - Admin
        msg = 'You, as a Moderator, cannot warn an Admin!';
      } else if (has(moderator, mod) && has(member, tl)) { // Moderator - Team Leader
        msg = 'You, as a Moderator, cannot warn a Team Leader!';
      }

      if (msg) throw new CommandError(msg, opts);
      return user; */
    }
    return user;
  }
}

export default UserParameter;
