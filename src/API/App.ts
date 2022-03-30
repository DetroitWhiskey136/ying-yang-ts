import * as http from 'http';
import cors from 'cors';
import express from 'express';
import * as expressWinston from 'express-winston';
import * as winston from 'winston';

import { Client } from '../Core';
import * as Routes from './Routes';
import { CommonRoutesConfig } from './Util';

export function init(bot: Client.BotClient) {
  const app = express();
  const server = http.createServer(app);
  const port = 3000;
  const routes: Array<CommonRoutesConfig> = [];

  app.use(express.json());
  app.use(cors());
  const loggerOptions: expressWinston.LoggerOptions = {
    format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true }),
    ),
    transports: [new winston.transports.Console()],
  };

  loggerOptions.meta = true;

  app.use(expressWinston.logger(loggerOptions));

  routes.push(new Routes.AdminRoutesConfig(app, bot));
  routes.push(new Routes.AuthErrorRoutesConfig(app, bot));
  routes.push(new Routes.CallbackRoutesConfig(app, bot));
  routes.push(new Routes.CommandsRoutesConfig(app, bot));
  routes.push(new Routes.DashboardRoutesConfig(app, bot));
  routes.push(new Routes.LoginRoutesConfig(app, bot));
  routes.push(new Routes.LogoutRoutesConfig(app, bot));
  routes.push(new Routes.StatsRoutesConfig(app, bot));

  const runningMessage = `Server running at http://localhost:${port}`;

  app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
  });

  return server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
      console.log(`Routes configured for ${route.getName()}`);
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log(runningMessage);
  });
}
