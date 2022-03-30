import { resolve } from 'path';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig, Constants } from '../Util';

export class PublicRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'PublicRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.use(
      '/public',
      express.static(
        resolve(Constants.DATA_DIRECTORY, 'public'),
      ),
    );

    return this.app;
  }
}
