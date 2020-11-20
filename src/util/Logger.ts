import fs from 'fs';

// #region Scope Declaration
/**
 * The type definitions for Logger Types
 * @interface LoggerTypes
 */
interface LoggerTypes {
  LOG: string[];
  INFO: string[];
  DEBUG: string[];
  WARN: string[];
  ERROR: string[];
}

/**
 * Sets a Color name to the terminal value
 *
 * @enum {number}
 */
enum Colors {
  FgBlue = '\x1b[34m',
  FgCyan = '\x1b[36m',
  FgGreen = '\x1b[32m',
  FgLightMagenta = '\x1b[95m',
  FgRed = '\x1b[31m',
  FgWhite = '\x1b[37m',
  FgYellow = '\x1b[33m',
  FgDarkGray = '\x1b[90m',
}

const TerminalFormatter = {
  bold(text: string): string {
    return `\x1b[1m${text}\x1b[0m`;
  },
  color(color: Colors, text: string): string {
    return `${color + text}\x1b[0m`;
  },
  underlined(text: string): string {
    return `\x1b[4m${text}\x1b[0m`;
  },
};
// #endregion

/**
 * The Logger Class, every project should have this.
 * @export
 * @class Logger
 */
export default class Logger {
  // #region Methods
  /**
   * Adds 0 to the beginning of the number if less than 10
   * @private
   * @static
   * @param {number} input The number to format
   * @returns {string} String or Number
   * @memberof Logger
   */
  private static formatTime(input: number): string {
    return input < 10 ? `0${input}` : `${input}`;
  }

  /**
   * Create a new timestamp array.
   *
   * @private
   * @static
   * @returns {string[]} String Array
   * @memberof Logger
   */
  private static timestamp(): string[] {
    const date = new Date();
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formatedTime = `${this.formatTime(date.getHours())}:${this.formatTime(date.getMinutes())}:${this.formatTime(date.getSeconds())}`;
    const formatedDate = `${m[date.getMonth()]}-${this.formatTime(date.getDate())}-${date.getFullYear()}`;
    const fileDate = `${date.getMonth()}-${this.formatTime(date.getDate())}-${date.getFullYear()}`;

    return [
      TerminalFormatter.color(Colors.FgDarkGray, `${formatedDate} ${formatedTime}`),
      `${fileDate}`,
      `${formatedDate} ${formatedTime}`,
    ];
  }

  /**
   * Writes to the end of the log file
   * @private
   * @static
   * @param {string[]} timestamp A timestamp.
   * @param {...any[]} content The content.
   * @returns {void}
   * @memberof Logger
   */
  private static appendLogs(timestamp: string[], ...content: any[]): void {
    const filePath = './data/logs/';
    const file = `${filePath}${timestamp[1]}.log`;
    if (!fs.existsSync(filePath)) fs.mkdirSync(filePath, { recursive: true });
    fs.appendFileSync(file, `${content}\n`);
  }

  /**
   * Creates a type for colors and stuff
   * @private
   * @static
   * @param {keyofLoggerTypes} loggerType The Logger Type.
   * @returns {Array<string>} String Array
   * @memberof Logger
   */
  private static type(loggerType: keyof LoggerTypes): string[] {
    const types: LoggerTypes = {
      DEBUG: [
        TerminalFormatter.bold(
          TerminalFormatter.color(
            Colors.FgLightMagenta, 'DEBUG',
          ),
        ),
        'DEBUG',
      ],
      ERROR: [
        TerminalFormatter.bold(
          TerminalFormatter.color(
            Colors.FgRed, 'ERROR',
          ),
        ),
        'ERROR',
      ],
      INFO: [
        TerminalFormatter.bold(
          TerminalFormatter.color(
            Colors.FgCyan, 'INFO',
          ),
        ),
        'INFO',
      ],
      LOG: [
        TerminalFormatter.bold(
          TerminalFormatter.color(
            Colors.FgGreen, 'LOG',
          ),
        ),
        'LOG',
      ],
      WARN: [
        TerminalFormatter.bold(
          TerminalFormatter.color(
            Colors.FgYellow, 'WARN',
          ),
        ),
        'WARN',
      ],
    };

    return types[loggerType];
  }

  /**
   * Sends a Log message
   * @static
   * @param {...any[]} content The content.
   * @returns {void}
   * @memberof Logger
   */
  public log(...content: any[]): void {
    const tm = Logger.timestamp();
    console.log(Logger.type('LOG')[0], tm[0], ...content);
    Logger.appendLogs(tm, `${Logger.type('LOG')[1]} ${tm[2]} ${content.join(' ')}`);
  }

  /**
   * Sends a Info message
   * @static
   * @param {...any[]} content The content.
   * @returns {void}
   * @memberof Logger
   */
  public info(...content: any[]): void {
    const tm = Logger.timestamp();
    console.log(Logger.type('INFO')[0], tm[0], ...content);
    Logger.appendLogs(tm, `${Logger.type('INFO')[1]} ${tm[2]} ${content.join(' ')}`);
  }

  /**
   * Sends a Debug message
   * @static
   * @param {any[]} content The content.
   * @returns {void}
   * @memberof Logger
   */
  public debug(...content: any[]): void {
    const tm = Logger.timestamp();
    console.log(Logger.type('DEBUG')[0], tm[0], ...content);
    Logger.appendLogs(tm, `${Logger.type('DEBUG')[1]} ${tm[2]} ${content.join(' ')}`);
  }

  /**
   * Sends a Warn message
   * @static
   * @param {any[]} content The content.
   * @returns {void}
   * @memberof Logger
   */
  public warn(...content: any[]): void {
    const tm = Logger.timestamp();
    console.log(Logger.type('WARN')[0], tm[0], ...content);
    Logger.appendLogs(tm, `${Logger.type('WARN')[1]} ${tm[2]} ${content.join(' ')}`);
  }

  /**
   * Sends a Error message
   * @static
   * @param {any[]} content The content.
   * @returns {void}
   * @memberof Logger
   */
  public error(...content: any[]): void {
    const tm = Logger.timestamp();
    console.log(Logger.type('ERROR')[0], tm[0], ...content);
    Logger.appendLogs(tm, `${Logger.type('ERROR')[1]} ${tm[2]} ${content.join(' ')}`);
  }
  // #endregion
}
