/**
 * Set the types of the various options in the eventOptions
 * @param name string
 * @param enabled boolean
 * @param type string
 * @interface eventOptions
 */
export interface eventOptions {
  name: string,
  enabled: boolean,
}

/**
 * The Event Class.
 * @class Event
 */
export class Event {
  // #region Type Declarations
  name: string;

  enabled: boolean;

  type: string;
  // #endregion

  // #region Constructor
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
  // #endregion

  // #region Methods

  // #endregion
}
