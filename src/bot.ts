import * as Sentry from '@sentry/node';
import disbut from 'discord-buttons';
import 'dotenv/config';
import 'tsconfig-paths/register';
import './structures';

import { BotClient, clientOptions } from './index';

const bot = new BotClient(clientOptions);
disbut(bot.client);

bot.client.on('clickButton', async (button) => {
  if (button.id === '1') {
    button.reply.send(`${button.clicker.user.tag} clicked button!`);
  }
});

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

if (process.env.NODE_ENV !== 'production') bot.dev();

bot.init(String(process.env.TOKEN), Sentry);
