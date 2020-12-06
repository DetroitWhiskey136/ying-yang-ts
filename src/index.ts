// #region Imports
import * as Sentry from '@sentry/node';
import 'dotenv/config';
import 'tsconfig-paths/register';
import './structures';

import BotClient from './client/BotClient';
import { clientOptions } from './util/Constants';
// #endregion

// #region Declare new BotClient
const bot = new BotClient(clientOptions);
// #endregion

// #region Sentry
Sentry.init({
  attachStacktrace: true,
  dsn: process.env.SentryDSN,
  environment: 'development',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
  ],
  release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  name: 'My Transaction',
  op: 'transaction',
});

Sentry.configureScope((scope) => {
  scope.setSpan(transaction);
});
// #endregion

// #region Bot Minor Events
bot.client
  .on('error', (error) => {
    bot.logger.error(error.message);
    Sentry.captureException(error);
  });

if (process.env.NODE_ENV !== 'production') {
  bot.client.on('debug', (debug) => {
    const words = ['heartbeat', 'heartbeat.', 'token:', 'swept'];
    const msg = debug.toLowerCase().split(' ');
    const filtered = msg.filter((word) => words.includes(word));

    if (filtered.length <= 0) {
      bot.logger.debug(debug);
    }

    // Sentry.captureMessage(debug);
  });
}
// #endregion

// #region Bot Login
bot.client
  .login(process.env.TOKEN)
  .then(() => {
    bot.logger.debug('Using token to login');
  })
  .catch((error) => {
    bot.logger.error(
      `${error.name}:\n  ${error.message}\n${error.stack.replace(
        `${error.name}: ${error.message}`, '',
      )}`,
    );
  })
  .finally(() => {
    bot.logger.info('Bot is Ready');
  });
// #endregion
