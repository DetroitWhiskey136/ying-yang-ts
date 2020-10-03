import 'dotenv/config';
import 'tsconfig-paths/register';
import './structures';

import BotClient from 'src/client/BotClient';
import { clientOptions } from '@util/Constants';

const bot = new BotClient(clientOptions);

bot.client.login(process.env.TOKEN).then(() => {
  if (process.env.DEBUG) bot.logger.debug('Using token to login');
}).catch((error) => {
  bot.logger.error(`${error.name}:\n  ${error.message}\n${error.stack.replace(`${error.name}: ${error.message}`, '')}
    `);
});
