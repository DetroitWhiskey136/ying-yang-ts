import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class LogoutRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'LogoutRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/logout')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('logout');
      });

    return this.app;
  }
}
