import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class CommandsRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'CommandsRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/commands')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(JSON.stringify(this.bot.commands));
      });

    return this.app;
  }
}
