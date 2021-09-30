import { Collection } from 'discord.js';

/**
 * This module is used to keep all the useful DRY code that can
 * be called at any time from anywhere in the project.
 *
 * For more specific method calls you might want to look in the other util files listed below
 * * Strings
 * * Files
 * * MemberUtil
 * * Logger
 * * ImageUtil
 * * ChannelUtil
 *
 * Calling this class:
 * ```js
 * import * from 'path-to-this-file'
 * ```
 *
 * @class Utils
 */
export class Util {
  /**
   * Checks if something is empty as in if their size/length is 0.
   * @param {*} val The value to be checked if empty.
   * @returns {boolean} Whether it is empty or not.
   */
  static isEmpty(val: any): boolean {
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
  static isPromise(val: any): boolean {
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
  static isBoolean(str: string): string | boolean {
    let result;
    str === 'true'
      ? (result = true)
      : str === 'false'
        ? (result = false)
        : (result = str);
    return result;
  }

  /**
   * Groups items in a list based on a common-matched value.
   * @template K Is generally intended to be a property of V.
   * @template V List of items
   * @param {(Collection<string, V> | Array<V> | Map<string, V>)} list The list of items
   * @param {(input: V) => K} keyGetter The command-matched value to index from
   * @returns {Map<K, Array<V>>} Map of the grouped arrays
   */

  static groupBy<K, V>(
    list: Collection<string, V> | Array<V> | Map<string, V>,
    keyGetter: (input: V) => K,
  ): Map<K, Array<V>> {
    const map = new Map();
    list.forEach((command: V) => {
      const key = keyGetter(command);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [command]);
      } else {
        collection.push(command);
      }
    });
    return map;
  }
}
