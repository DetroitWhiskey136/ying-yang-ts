/**
 * @class Utils
 */
export default class Util {
  /**
   * Checks if something is empty as in if their size/length is 0.
   * @param {*} val The value to be checked if empty.
   * @returns {boolean} Whether it is empty or not.
   */
  static isEmpty(val: any) {
    if ([false, null, undefined].includes(val)) return true;

    if (typeof val === 'number') return val === 0;
    if (typeof val === 'boolean') return false;
    if (
      typeof val === 'string'
      || typeof val === 'function'
      || Array.isArray(val)
    ) { return val.length === 0; }

    if (val instanceof Error) return val.message === '';

    if (val.toString === Object.prototype.toString) {
      const type = val.toString();

      if (
        type === '[object File]'
        || type === '[object Map]'
        || type === '[object Set]'
      ) { return val.size === 0; }

      if (type === '[object Object]') {
        // eslint-disable-next-line no-restricted-syntax
        for (const key in val) {
          if (Object.prototype.hasOwnProperty.call(val, key)) return false;
        }

        return true;
      }
    }

    return false;
  }

  /**
   * Checks if something is a promise.
   * @param {*} val The value to be checked.
   * @returns {boolean} If the value was a promise.
   */
  static isPromise(val: any) {
    return (
      val
      && Object.prototype.toString.call(val) === '[object Promise]'
      && typeof val.then === 'function'
    );
  }

  /**
   * Checks if string is a boolean.
   * @param {String} str The value to be checked.
   * @returns {boolean} If the value was a boolean.
   */
  static isBoolean(str: string) {
    let result;
    str === 'true'
      ? (result = true)
      : str === 'false'
        ? (result = false)
        : (result = str);
    return result;
  }
}
