export interface BaseError extends Error {
  cause: string;
}

export abstract class BaseError extends Error {
  constructor(name: string, cause?: string, ...message: string[]) {
    super(...message, cause);
    this.name = name;
    this.cause = cause ?? '';
  }
}
