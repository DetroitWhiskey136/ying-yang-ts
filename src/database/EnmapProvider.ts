// eslint-disable-next-line max-classes-per-file
import Enmap from 'enmap';

// #region Scope Declaration
export declare interface EnmapProvider<D> {
  model: any;
  help: object;
  __proto__: any;
}

// #endregion

/**
 * The EnmapProvider class.
 * @class EnmapProvider
 * @template D
 */
export class EnmapProvider<D> {
  // #region Constructor
  constructor(model: Enmap) {
    this.model = model;
    // eslint-disable-next-line no-proto
    this.help = this.__proto__;
  }
  // #endregion

  // #region Methods
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
   * @returns {D} An error if document exists or creates the docment.
   * @memberof EnmapProvider
   */
  public set(key: string, value: any): D {
    const data = this.model.get(key);
    return data
      ? new Error(`Data already exists: ${key}`)
      : this.model.set(key, value);
  }

  /**
   * updates a document from the db, returns an error if it doesn't exist (allows dot-notaion)
   * @param {string} key The key of the document.
   * @param {*} value The new value of the docuemnt.
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
  // #endregion
}
