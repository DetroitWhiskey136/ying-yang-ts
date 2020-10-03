import path from 'path';
import klaw from 'klaw';

import Logger from '@util/Logger';
import BotClient from '@client/BotClient';

const logger = new Logger();

/**
 * Standard File Handler Class
 * @class FileUtil
 */
class FileUtil {
  message: string | null;
  /**
   * Creates an instance of FileUtil.
   * @memberof FileUtil
   */
  constructor () {
    this.message = null;
  }

  /**
   * Load all files in a folder and
   * gets them ready for the loadFile method
   * @static
   * @param {string} url The folder of files you want to load
   * @param {BotClient} bot The BotClient object
   * @memberof FileUtil
   */
  LoadFiles (url: string, bot: BotClient) {
    klaw(url).on('data', async (item: klaw.Item) => {
      const parsedItem = path.parse(item.path);
      if (!parsedItem.ext || !['.js', '.ts'].includes(parsedItem.ext)) return;

      const parsedName = `${parsedItem.name}${parsedItem.ext}`;
      if (process.env.DEBUG === 'true') logger.debug(`${parsedItem.name} Loading`);

      await this.LoadFile(parsedItem.dir, parsedName, bot);
      if (this.message) logger.error(this.message);
    });
  }

  /**
   * Loads a specific file into the appropriate Collection if not disabled.
   * @private
   * @static
   * @param {string} filePath The files path.
   * @param {string} fileName The files name.
   * @param {BotClient} bot The BotClient.
   * @memberof FileUtil
   */
  private async LoadFile (filePath: string, fileName: string, bot: BotClient) {
    try {
      this.message = null;

      const importedFile = await import(path.resolve(filePath, fileName));
      // eslint-disable-next-line new-cap
      const props = new importedFile.default(importedFile.default.name);

      if (!props.enabled) {
        this.message = `${fileName.split('.').slice(0, 1)} File Disabled: not adding to Collection.`;
        return;
      }

      props.location = filePath;
      props.filename = fileName;

      if (props.type === 'event') {
        bot.events.set(props.name, props);
        bot.client.on(
          props.name,
          (...args) => props.run(bot, bot.client, ...args)
        );
      } else if (props.type === 'command') {
        bot.commands.set(props.name, props);

        props.aliases.forEach((alias: string) => {
          bot.aliases.set(alias, props.name);
        });
      }

      if (process.env.DEBUG === 'true') logger.debug(`${fileName.split('.').slice(0, 1)} loaded`);
    } catch (error) {
      this.message = `Unable to load command ${fileName}: ${error.message}`;
    }
  }
}
export default FileUtil;
