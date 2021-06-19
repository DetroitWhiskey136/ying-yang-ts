import {
  ClientOptions, Intents,
} from 'discord.js';

export const clientOptions: ClientOptions = {
  allowedMentions: { repliedUser: true },
  intents: Intents.ALL,
  messageCacheLifetime: 240,
  messageCacheMaxSize: 100,
  messageSweepInterval: 300,
  partials: [
    'MESSAGE',
    'CHANNEL',
  ],
  retryLimit: 3,
  ws: {
    large_threshold: 100,
  },
};

export const REGEX = {
  DOMAINS: /^https?:\/\/(www\.)?(pastebin|(gist\.)?github|gitlab)\.com\/\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/i,
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
