import { ClientOptions, Intents, TextChannel } from 'discord.js';

export const clientOptions: ClientOptions = {
  disableMentions: 'everyone',
  fetchAllMembers: true,
  partials: [
    'MESSAGE',
    'CHANNEL'
  ],
  messageCacheMaxSize: 100,
  messageCacheLifetime: 240,
  messageSweepInterval: 300,
  ws: {
    large_threshold: 100,
    intents: Intents.ALL
  },
  retryLimit: 3
};

export const REGEX = {
  ROLE_ID: /^[0-9]{16, 19}$/,
  ROLE_MENTION: /^(?:<@&)([0-9]{16,19})(?:>)$/,
  USER_ID: /^[0-9]{16,19}$/,
  MEMBER_MENTION: /^(?:<@!?)?([0-9]{16,19})(?:>)?$/,
  REGEX: /[|\\{}()[\]^$+*?.]/g,
  DOMAINS: /^https?:\/\/(www\.)?(pastebin|(gist\.)?github|gitlab)\.com\/\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/i
};

export const MESSAGES = {
  PREFIX: 'My prefix in this guild is: {prefix}'
};

export const OPTIONS = {
  PREFIX: '/'
};

export type stringResolvable = string | undefined | null;
export type channelResolvable = TextChannel | undefined | null;
export type numberResolvable = number | undefined | null;
export type booleanResolvable = boolean | undefined | null;
