import { ClientEvents } from 'discord.js';

/**
 * Set the types of the various options in the eventOptions
 * @param name string
 * @param enabled boolean
 * @param type string
 * @interface eventOptions
 */
export interface eventOptions {
  name: keyof ClientEvents,
  enabled: boolean,
}

/**
 * The Event Class.
 * @class Event
 */
export class Event {
  name: keyof ClientEvents;

  enabled: boolean;

  type: string;

  /**
   * Creates an instance of Event.
   * @param {eventOptions} options Options for the event
   * @param {string} [options.name] The name of the event.
   * @param {boolean} [options.enabled] Should be in BotClient?
   * @param {string} [options.type] Use 'event'.
   *
   * @memberOf Event
   */
  constructor(options: eventOptions) {
    this.name = options.name;
    this.enabled = options.enabled;
    this.type = 'event';
  }
}
