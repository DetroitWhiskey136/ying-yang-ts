import Enmap from 'enmap';

interface EnmapOptions {
  name: string;
  dataDir: string;
}

export interface EnmapProvider<D> {
  model: any;
  help: object;
  __proto__: any;
}

/**
 * The EnmapProvider class.
 * ``` javascript
 * EnmapProvider({ dataDir: path-to-enmap-storage, name: 'name-of-table' })
 * ```
 * @class EnmapProvider
 * @template D
 */
export class EnmapProvider<D> {
  constructor(options: EnmapOptions) {
    this.model = new Enmap(options.name, { dataDir: options.dataDir });
    // eslint-disable-next-line no-proto
    this.help = this.__proto__;
  }

  /**
   * Gets a document from the db / returns an error if not found.
   * @param {string} key The key of the document.
   * @returns {D} The document or an error.
   * @memberof EnmapProvider
   */
  public get(key: string): D {
    const data = this.model.get(key);
    return data || new Error(`Data not found: ${key}`);
  }

  /**
   * sets a document from the db, returns an error if it exists
   * @param {string} key The key of the document.
   * @param {*} value The object value of the document.
   * @returns {D} An error if document exists or creates the document.
   * @memberof EnmapProvider
   */
  public set(key: string, value: any): D {
    const data = this.model.get(key);
    return data
      ? new Error(`Data already exists: ${key}`)
      : this.model.set(key, value);
  }

  /**
   * updates a document from the db, returns an error if it doesn't exist (allows dot-notation)
   * @param {string} key The key of the document.
   * @param {*} value The new value of the document.
   * @returns {object} The document or an error.
   * @memberof EnmapProvider
   */
  public update(key: string, value: any): D {
    const data = this.model.get(key);
    return data
      ? this.model.update(key, value)
      : new Error(`Data not found: ${key}`);
  }

  /**
   * ensures a document exists in the db, creates a new document if it doesn't exist
   * @param {string} key The key of the document.
   * @param {*} value The value of the document.
   * @returns {D} The object of the document.
   * @memberof EnmapProvider
   */
  public ensure(key: string, value: any): D {
    return this.model.ensure(key, value);
  }

  /**
   * Deletes a document in the db,returns an error if it doesn't exist
   * @param {string} key The key of the document.
   * @returns {D} The object should be null or undefined -_- or an error.
   * @memberof EnmapProvider
   */
  public delete(key: string): D {
    const data = this.model.get(key);
    return data
      ? this.model.delete(key)
      : new Error(`Data not found: ${key}`);
  }
}
