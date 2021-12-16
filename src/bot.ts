import * as Sentry from '@sentry/node';
import 'dotenv/config';

import { Core } from './index';

const bot = new Core.Client.BotClient(Core.Util.Constants.clientOptions);

Sentry.init({
  attachStacktrace: true,
  dsn: process.env.SentryDSN,
  environment: 'development',
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
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
