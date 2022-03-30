import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class StatsRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'StatsRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/stats')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('stats');
      });

    return this.app;
  }
}
