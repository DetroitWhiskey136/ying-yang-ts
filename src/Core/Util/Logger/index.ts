import fs from 'fs';
import { Util } from '../../../Core';
import { LoggerTypes } from './LoggerTypes';

/**
 * The Logger Class, every project should have this.
 * @export
 * @class Logger
 */
export class Logger {
  /**
   * Adds 0 to the beginning of the number if less than 10
   * @private
   * @static
   * @param {number} input The number to format
   * @returns {string} String or Number
   * @memberOf Logger
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
   * @memberOf Logger
   */
  private static timestamp(): string[] {
    const date = new Date();
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formatedTime = `${this.formatTime(date.getHours())}:${this.formatTime(date.getMinutes())}:${this.formatTime(date.getSeconds())}`;
    const formatedDate = `${m[date.getMonth()]}-${this.formatTime(date.getDate())}-${date.getFullYear()}`;
    const fileDate = `${date.getMonth() + 1}-${this.formatTime(date.getDate())}-${date.getFullYear()}`;

    return [
      `${Util.Colors.Foreground.Grey}${formatedDate} ${formatedTime}${Util.Colors.Formatters.Reset}`,
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
   * @memberOf Logger
   */
  private static appendLogs(timestamp: string[], ...content: any[]): void {
    const filePath = './data/logs/';
    const file = `${filePath}${timestamp[1]}.log`;
    if (!fs.existsSync(filePath)) fs.mkdirSync(filePath, { recursive: true });
    fs.appendFileSync(file, `${content}\n`);
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * Creates a type for colors and stuff.
   *
   * @private
   * @static
   * @param {keyof LoggerTypes} loggerType The Logger Type
   * @return {string[]} String Array<String>
   * @memberof Logger
   */
  private static type(loggerType: keyof LoggerTypes): Array<string> {
    const types: LoggerTypes = {
      DEBUG: [
        `${Util.Colors.Formatters.Bold}${Util.Colors.Foreground.LightMagenta}DEBUG${Util.Colors.Formatters.Reset}`,
        'DEBUG',
      ],
      ERROR: [
        `${Util.Colors.Formatters.Bold}${Util.Colors.Foreground.Red}ERROR${Util.Colors.Formatters.Reset}`,
        'ERROR',
      ],
      INFO: [
        `${Util.Colors.Formatters.Bold}${Util.Colors.Foreground.Cyan}INFO${Util.Colors.Formatters.Reset}`,
        'INFO',
      ],
      LOG: [
        `${Util.Colors.Formatters.Bold}${Util.Colors.Foreground.Green}LOG${Util.Colors.Formatters.Reset}`,
        'LOG',
      ],
      WARN: [
        `${Util.Colors.Formatters.Bold}${Util.Colors.Foreground.Yellow}WARN${Util.Colors.Formatters.Reset}`,
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
}
