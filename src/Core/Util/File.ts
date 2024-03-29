import path from 'path';
import klaw from 'klaw';
import { Client } from '..';

export interface Files {
  message: string | null;
  LoadFiles(url: string, bot: Client.BotClient): void;
  LoadFile(
    filePath: string,
    fileName: string,
    bot: Client.BotClient
  ): Promise<void>;
  UnloadFile(
    filePath: string,
    fileName: string,
    bot: Client.BotClient,
  ): boolean;
}

/**
 * Standard File Handler Class
 * @class FileUtil
 */
export class Files {
  /**
   * Load all files in a folder and
   * gets them ready for the loadFile method
   * @static
   * @param {string} url The folder of files you want to load
   * @param {BotClient} bot The BotClient object
   * @returns {void}
   * @memberOf Files
   */
  public static LoadFiles(url: string, bot: Client.BotClient) {
    klaw(url).on('data', async (item: klaw.Item) => {
      const parsedItem = path.parse(item.path);
      if (!parsedItem.ext || !['.js', '.ts'].includes(parsedItem.ext)) return;

      const parsedName = `${parsedItem.name}${parsedItem.ext}`;

      if (process.env.NODE_ENV !== 'production') bot.logger.debug(`${parsedItem.name} Loading`);

      await Files.LoadFile(parsedItem.dir, parsedName, bot);
    });
  }

  /**
   * Loads a specific file into the appropriate Collection if not disabled.
   * @private
   * @static
   * @param {string} filePath The files path.
   * @param {string} fileName The files name.
   * @param {BotClient} bot The BotClient.
   * @returns {Promise<void>} A void Promise
   * @memberOf Files
   */
  public static async LoadFile(
    filePath: string,
    fileName: string,
    bot: Client.BotClient,
  ) {
    try {
      const importedFile = await import(path.resolve(filePath, fileName));
      const propName = Object.keys(importedFile)[0];
      // eslint-disable-next-line new-cap
      const props = new importedFile[propName](importedFile[propName]);

      if (props.enabled === false) {
        return;
      }

      props.location = filePath;
      props.filename = fileName;

      if (props.type === 'event') {
        bot.events.set(props.name, props);
        bot.client.on(props.name, (...args) => props.run(bot, bot.client, ...args));
      } else {
        bot.commands.set(props.name, props);
        props.aliases.forEach((alias: string) => {
          bot.aliases.set(alias, props.name);
        });
      }

      if (process.env.NODE_ENV !== 'production') bot.logger.debug(`${fileName.split('.').slice(0, 1)} loaded`);
    } catch (err) {
      bot.logger.error(`Error in FileLoading: ${err}`);
    }
  }

  static UnloadFile(filePath: string, UName: string, bot: Client.BotClient): boolean {
    const file = bot.commands.has(UName)
      ? bot.commands.get(UName)
      : bot.aliases.has(UName)
        ? bot.commands.get(bot.aliases.get(UName)!)
        : bot.events.has(UName)
          ? bot.events.get(UName)
          : false;

    if (file) {
      delete require.cache[require.resolve(path.resolve(filePath, file.filename))];
      return true;
    }

    return false;
  }
}
