import express from 'express';
import { Client } from '../../Core';

export interface CommonRoutesConfig {
  app: express.Application;
  name: string;
  bot: Client.BotClient;
}

export abstract class CommonRoutesConfig {
  constructor(app: express.Application, name: string, bot: Client.BotClient) {
    this.app = app;
    this.name = name;
    this.bot = bot;
    this.configureRoutes();
  }

  getName(): string {
    return this.name;
  }

  abstract configureRoutes(): express.Application;
}
