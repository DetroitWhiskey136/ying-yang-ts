import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class AuthErrorRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'AuthErrorRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/autherror')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('autherror');
      });

    return this.app;
  }
}
