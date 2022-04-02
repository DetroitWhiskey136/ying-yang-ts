import { ClientEvents } from 'discord.js';

/**
 * Set the types of the various options in the eventOptions
 * @param name string
 * @param enabled boolean
 * @param type string
 * @interface eventOptions
 */
export interface eventOptions {
  name: keyof ClientEvents;
  enabled?: boolean;
}

export interface Event {
  location: string;
  filename: string;
  name: keyof ClientEvents;
  enabled?: boolean;
  type: string;
}

/**
 * The Event Class.
 * @class Event
 */
export class Event {
  /**
   * Creates an instance of Event.
   * @param {eventOptions} options Options for the event
   * @param {string} [options.name] The name of the event.
   * @param {boolean} [options.enabled] Should be in BotClient?
   * @param {string} [options.type] Use 'event'.
   */
  constructor(options: eventOptions) {
    this.name = options.name;
    this.enabled = options.enabled ?? false;
    this.type = 'event';
    this.location = '';
    this.filename = '';
  }
}
