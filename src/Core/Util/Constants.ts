import { ClientOptions, Intents, Options } from 'discord.js';

export const clientOptions: ClientOptions = {
  allowedMentions: { repliedUser: true },
  intents: [
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS,
  ],
  makeCache: Options.cacheEverything(),
  partials: ['MESSAGE', 'CHANNEL'],
  retryLimit: 3,
  ws: {
    large_threshold: 100,
  },
};

export const REGEX = {
  DOMAINS:
    /^https?:\/\/(www\.)?(pastebin|(gist\.)?github|gitlab)\.com\/\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/i,
  MEMBER_MENTION: /^(?:<@!?)?([0-9]{16,19})(?:>)?$/,
  REGEX: /[|\\{}()[\]^$+*?.]/g,
  ROLE_ID: /^[0-9]{16, 19}$/,
  ROLE_MENTION: /^(?:<@&)([0-9]{16,19})(?:>)$/,
  USER_ID: /^[0-9]{16,19}$/,
};

export const MESSAGES = {
  PREFIX: 'My prefix in this guild is: {prefix}',
};

export const OPTIONS = {
  PREFIX: '/',
};

export type stringResolvable = string | undefined | null;
export type numberResolvable = number | undefined | null;
export type booleanResolvable = boolean | undefined | null;
