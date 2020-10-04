import { REGEX } from 'src/util/Constants';

export default class StringUtil {
  /**
   * If string is longer than max length will cut string down
   * @param {String} str
   * @param {String} lang
   * @param {Number} minLength
   * @param {Number} maxLength
   */
  static code(str: string, lang: string, minLength: number = 0, maxLength: number = 1024) {
    const data = String(str);
    return `\`\`\`${lang}\n${data.slice(minLength, maxLength - 3) + (data.length > maxLength - 3 ? '...' : '')}\n\`\`\``;
  }

  static escapeRegExp(str: string): string {
    return str
      .replace(REGEX.REGEX, '\\$&')
      .replace(/ -/g, '\\u002d');
  }

  static toProperCase(str: string): string {
    return (String(str ? str.toLowerCase() : this)).replace(/(^|[\s\xA0])[^\s\xA0]/g, (s: string) => s.toUpperCase());
  }

  static hasPlaceholder(str: string, placeholder: string, value: string): string {
    let result;
    // eslint-disable-next-line no-unused-expressions
    str.includes(placeholder) ? result = str.replace(placeholder, value) : result = str;
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
}
