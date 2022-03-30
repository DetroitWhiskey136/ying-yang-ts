import moment from 'moment';

import { REGEX } from './Constants';

export class Strings {
  /**
   * If string is longer than max length will cut string down
   * @param {String} str The string
   * @param {String} lang The markdown lang
   * @param {Number} minLength The minimum length
   * @param {Number} maxLength The maximum length
   * @returns {string} The formatted string of code?
   */
  static code(
    str: string,
    lang: string,
    minLength: number = 0,
    maxLength: number = 1024,
  ): string {
    const data = String(str);
    return `\`\`\`${lang}\n${
      data.slice(minLength, maxLength - 3)
      + (data.length > maxLength - 3 ? '...' : '')
    }\n\`\`\``;
  }

  static escapeRegExp(str: string): string {
    return str.replace(REGEX.REGEX, '\\$&').replace(/ -/g, '\\u002d');
  }

  static toProperCase(str: string): string {
    return String(str ? str.toLowerCase() : this).replace(
      /(^|[\s\xA0])[^\s\xA0]/g,
      (s: string) => s.toUpperCase(),
    );
  }

  static hasPlaceholder(
    str: string,
    placeholder: string,
    value: string,
  ): string {
    let result;
    // eslint-disable-next-line no-unused-expressions
    str.includes(placeholder)
      ? (result = str.replace(placeholder, value))
      : (result = str);
    return result;
  }

  static makeID(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  static setNickname(username: string): string {
    const parsedUsername = username.replace(/([!@#$%^&*()])/g, '');
    return parsedUsername.length > 0 ? parsedUsername : 'Nickname Not Found';
  }

  static formatTime(timestamp: number) {
    const format = 'MMM-DD-YYY HH:mm:ss';
    return moment(timestamp).format(format);
  }

  static formatUptime(uptime: number) {
    const result = [];

    const years = 31536000;
    const days = 86400;
    const hours = 3600;
    const minutes = 60;
    const seconds = 60;

    uptime >= years
      ? result.push(`${Math.floor(uptime / years)}y`) : null;
    uptime >= days
      ? result.push(`${Math.floor(uptime / days)}d`) : null;
    uptime >= hours
      ? result.push(`${Math.floor(uptime / hours)}h`) : null;
    uptime >= minutes
      ? result.push(`${Math.floor(uptime / minutes)}m`) : null;
    uptime <= seconds
      ? result.push(`${Math.floor(uptime % seconds)}s`) : null;

    return result.join(', ');
  }
}
