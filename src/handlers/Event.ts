/**
 * Set the types of the various options in the eventOptions
 * @param name string
 * @param enabled boolean
 * @param type string
 * @interface eventOptions
 */
interface eventOptions {
  name: string,
  enabled: boolean,
}

/**
 * The Event Class.
 * @class Event
 */
export default class Event {
  name: string;
  enabled: boolean;
  type: string;
  /**
   * Creates an instance of Event.
   * @param {eventOptions} options Options for the event
   * @param {string} [options.name] The name of the event.
   * @param {boolean} [options.enabled] Should be in BotClient?
   * @param {string} [options.type] Use 'event'.
   *
   * @memberof Event
   */
  constructor (options: eventOptions) {
    this.name = options.name;
    this.enabled = options.enabled;
    this.type = 'event';
  }
}
