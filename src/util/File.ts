import path from 'path';
import klaw from 'klaw';
import { BotClient } from '../index';

export interface Files {
  message: string | null;
  LoadFiles(url: string, bot: BotClient): void;
  LoadFile(filePath: string, fileName: string, bot: BotClient): Promise<void>;
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
   * @memberof FileUtil
   */
  public static LoadFiles(url: string, bot: BotClient) {
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
   * @memberof FileUtil
   */
  public static async LoadFile(filePath: string, fileName: string, bot: BotClient) {
    try {
      const importedFile = await import(path.resolve(filePath, fileName));
      const propName = Object.keys(importedFile)[0];
      // eslint-disable-next-line new-cap
      const props = new importedFile[propName](importedFile[propName]);

      if (!props.enabled) {
        return;
      }

      props.location = filePath;
      props.filename = fileName;

      switch (props.type) {
        case 'event':
          bot.events.set(props.name, props);
          bot.client.on(
            props.name,
            (...args) => props.run(bot, bot.client, ...args),
          );
          break;
        case 'command':
          bot.commands.set(props.name, props);

          props.aliases.forEach((alias: string) => {
            bot.aliases.set(alias, props.name);
          });
          break;
        case 'slash':
          // eslint-disable-next-line no-case-declarations
          const {
            defaultPermission, description, name, options,
          } = props;
          if (process.env.NODE_ENV !== 'production') {
            bot.logger.debug('Setting Dev Slash Commands for mods guild only');
            await bot.client.guilds.cache.get('374961173524643843')?.commands.create({
              defaultPermission, description, name, options,
            });
          } else {
            bot.logger.info('Registering global SlashCommands');
            await bot.client.application?.commands.create({
              defaultPermission, description, name, options,
            });
          }

          bot.slashCommands.set(name, props);
          break;
        default:
          break;
      }

      if (process.env.NODE_ENV !== 'production') bot.logger.debug(`${fileName.split('.').slice(0, 1)} loaded`);
    } catch (err) {
      bot.logger.error(`Error in FileLoading: ${err}`);
    }
  }
}
