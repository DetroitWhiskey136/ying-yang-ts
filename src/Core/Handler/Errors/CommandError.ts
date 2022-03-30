import { BaseError } from './BaseError';

export interface CommandError extends BaseError {
  commandName: string;
}

export class CommandError extends BaseError {
  constructor(commandName: string, ...message: Array<string>) {
    super('CommandError', commandName, ...message);
  }
}
