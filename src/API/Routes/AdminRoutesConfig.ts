import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class AdminRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'AdminRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/admin')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('admin');
      });

    return this.app;
  }
}
