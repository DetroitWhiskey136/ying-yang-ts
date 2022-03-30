import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class CallbackRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'CallbackRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/callback')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('callback');
      });

    return this.app;
  }
}
