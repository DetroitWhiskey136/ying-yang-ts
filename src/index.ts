import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import 'dotenv/config';
import 'tsconfig-paths/register';
import './structures';

import BotClient from './client/BotClient';
import { clientOptions } from './util/Constants';

const bot = new BotClient(clientOptions);

Sentry.init({
  dsn: process.env.SentryDSN,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

bot.client
  .on('error', (error) => {
    bot.logger.error(error.message);
    Sentry.captureException(error);
  });

bot.client.login(process.env.TOKEN).then(() => {
  if (process.env.DEBUG) bot.logger.debug('Using token to login');
}).catch((error) => {
  bot.logger.error(`${error.name}:\n  ${error.message}\n${error.stack.replace(`${error.name}: ${error.message}`, '')}
    `);
});
