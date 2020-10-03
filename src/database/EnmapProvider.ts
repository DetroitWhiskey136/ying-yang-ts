import Enmap from 'enmap';
import path from 'path';
import fs from 'fs';

const dataDir = `${process.cwd()}${path.sep}${path.join('data', 'enmap_data')}`;

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

class EnmapProvider<D> {
  public model: any;

  public help: any;

  __proto__: any;

  constructor(model: any) {
    this.model = new Enmap(model, { dataDir });
    // eslint-disable-next-line no-proto
    this.help = this.__proto__;
  }

  /**
   * Gets a document from the db, returns an error if not found
   *
   * @param {string} key
   * @memberof EnmapProvider
   */
  public async get(key: string) {
    const data = this.model.get(key);
    return data || new Error('Data not found');
  }

  /**
   * sets a document from the db, returns an error if it exists
   *
   * @param {string} key
   * @param {*} value
   * @memberof EnmapProvider
   */
  public async set(key: string, value: any) {
    const data = this.model.get(key);
    return data ? new Error('Data already exists') : this.model.set(key, value);
  }

  /**
   * updates a document from the db, returns an error if it doesn't exist
   *
   * @param {string} key
   * @param {*} value
   * @memberof EnmapProvider
   */
  public async update(key: string, value: any) {
    const data = this.model.get(key);
    return data ? this.model.set(key, value) : new Error('Data not found');
  }

  /**
   * ensures a document exists in the db, creates a new document if it doesn't exist
   *
   * @param {string} key
   * @param {*} value
   * @memberof EnmapProvider
   */
  public async ensure(key: string, value: any) {
    const data = this.model.get(key);
    return data || this.model.set(key, value);
  }

  /**
   * Deletes a document in the db,returns an error if it doesn't exist
   *
   * @param {string} key
   * @memberof EnmapProvider
   */
  public async delete(key: string) {
    const data = this.model.get(key);
    return data ? this.model.delete(key) : new Error('Data not found');
  }
}

export default EnmapProvider;
