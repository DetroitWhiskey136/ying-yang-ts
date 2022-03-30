import discord from 'discord.js';
import express from 'express';
import { Client } from '../../Core';
import { CommonRoutesConfig } from '../Util';

export class DashboardRoutesConfig extends CommonRoutesConfig {
  constructor(app: express.Application, bot: Client.BotClient) {
    super(app, 'DashboardRoute', bot);
  }

  configureRoutes(): express.Application {
    this.app.route('/dashboard')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('dashboard');
      });

    this.app.route('/dashboard/:guildID')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('dashboard with guildID');
      });

    this.app.route('/dashboard/:guildID/manage')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('dashboard with guildID manage');
      });

    this.app.route('/dashboard/:guildID/members')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('dashboard with guildID members');
      });

    this.app.route('/dashboard/:guildID/members/list')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('dashboard with guildID members list');
      });

    this.app.route('/dashboard/:guildID/stats')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('dashboard with guildID stats');
      });

    this.app.route('/dashboard/:guildID/leave')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('dashboard with guildID leave');
      });

    return this.app;
  }
}
