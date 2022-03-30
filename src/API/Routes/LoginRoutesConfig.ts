import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class LoginRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'LoginRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/login')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('login');
      });

    return this.app;
  }
}
