/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import crypto from 'crypto';
import {
  Guild, GuildMember, MessageAttachment, MessageEmbed,
  User, MessageEmbedOptions, ImageURLOptions, EmbedFieldData,
} from 'discord.js';
import { ImageUtil } from '../index';

const EmbedColors = { error: 'RED', normal: '#00FFFF', warn: '0xfdfd96' } as const;

// #region Scope Declaration
type EmbedResolvable = User | GuildMember
type EmbedInput = Guild | GuildMember | User | string;

interface EmbedOptions {
  autoAuthor: boolean;
  autoFooter: boolean;
  autoTimestamp: boolean;
  type: keyof typeof EmbedColors;
}

interface FieldOptions {
  inline?: boolean;
  name: string | number;
  options?: object;
  value: string | number;
}
// #endregion

/**
 * Represents a rich embed in a message.
 */
export class Embed extends MessageEmbed {
  // #region Type Declarations
  options: EmbedOptions;
  // #endregion

  // #region Constructor
  /**
   * @param {EmbedResolvable | null} embedResolvable The embed resolvable.
   * @param {Partial<EmbedOptions>} options The options for the embed.
   * @param {MessageEmbed | MessageEmbedOptions} data The data of the embed.
   */
  constructor(
    embedResolvable?: EmbedResolvable | null,
    options: Partial<EmbedOptions> = {},
    data: MessageEmbed | MessageEmbedOptions = {},
  ) {
    super(data);

    this.options = {
      autoAuthor: true,
      autoFooter: true,
      autoTimestamp: true,
      type: 'normal',
      ...options,
    };
    if (embedResolvable) {
      if (embedResolvable instanceof User) {
        this.setTemplate(embedResolvable);
      } else if (embedResolvable instanceof GuildMember) {
        this.setTemplate(embedResolvable.user);
      }
    }

    const color = EmbedColors[this.options.type] || EmbedColors.normal;

    this.setColor(color);
  }
  // #endregion

  // #region Methods
  setTemplate(user: User): void {
    if (this.options.autoAuthor) this.setAuthor(user);
    if (this.options.autoFooter) this.setFooter(user.tag);
    if (this.options.autoTimestamp) this.setTimestamp();
  }

  /**
   * Resolves a name
   * @param {EmbedInput} resolvable The resolvable to be resolved
   * @returns {string} The resolved name
   */
  static resolveName(resolvable: EmbedInput): string {
    if (resolvable instanceof User) return resolvable.tag;
    if (resolvable instanceof GuildMember) return resolvable.user.tag;
    if (resolvable instanceof Guild) return resolvable.name;
    return resolvable;
  }

  /**
   * No idea what this does probably shouldn't touch it.
   * @static
   * @param {*} resolvable The resolvable
   * @returns {boolean} A Boolean
   * @memberof Embed
   */
  static hasSupport(resolvable: any): boolean {
    return resolvable instanceof GuildMember
      || resolvable instanceof GuildMember
      || resolvable instanceof Guild;
  }

  /**
   * Resolves an icon
   * @param {EmbedInput} resolvable The resolvable to be resolved
   * @returns {string} The resolved image url
   */
  resolveImage(resolvable: EmbedInput): string {
    const o: ImageURLOptions & { dynamic?: boolean } = { dynamic: true, format: 'png', size: 4096 };
    if (resolvable instanceof User) return resolvable.displayAvatarURL(o);
    if (resolvable instanceof GuildMember) return resolvable.user.displayAvatarURL(o);
    if (resolvable instanceof Guild) {
      const icon = resolvable.iconURL(o);
      if (icon) return icon;
      const defaultIcon = ImageUtil.renderGuildIcon(resolvable.nameAcronym);
      const name = `${crypto.randomBytes(20).toString('hex')}.png`;
      return `attachment://${name}`;
    }
    return resolvable;
  }

  /**
   * Sets the color of this embed to red
   * @returns {this} This?
   */
  setError(): this {
    return this.setColor(EmbedColors.error);
  }

  /**
   * Sets the author of this embed.
   * @param {EmbedInput} name The name of the author
   * @param {EmbedInput | null} iconURL The icon URL of the author
   * @param {EmbedInput | null} url The URL of the author
   * @returns {this} This?
   */
  setAuthor(
    name: EmbedInput,
    iconURL?: EmbedInput | null,
    url?: EmbedInput | null,
  ): this {
    const parseName = Embed.resolveName(name);
    const parseIcon = iconURL
      ? this.resolveImage(iconURL) : typeof name !== 'string' ? this.resolveImage(name) : undefined;
    const parseUrl = url ? this.resolveImage(url) : undefined;
    return super.setAuthor(
      parseName,
      parseIcon,
      parseUrl,
    );
  }

  /**
   * Sets the footer of this embed.
   * @param {EmbedInput} text The text of the footer
   * @param {EmbedInput} iconURL The icon URL of the footer
   * @returns {this} This?
   */
  setFooter(text: EmbedInput, iconURL: EmbedInput | null = null): this {
    const parseText = Embed.resolveName(text);
    const parseIconURL = iconURL
      ? this.resolveImage(iconURL)
      : Embed.hasSupport(text) ? this.resolveImage(text) : undefined;

    return super.setFooter(
      parseText,
      parseIconURL,
    );
  }

  /**
   * Sets the description of this embed.
   * @param {string} description The description
   * @returns {this} This?
   */
  setDescription(description: string): this {
    return super.setDescription(description);
  }

  /**
   * Sets the title of this embed.
   * @param {string} title The title
   * @returns {this} This?
   */
  setTitle(title: string): this {
    return super.setTitle(title);
  }

  /**
   * Adds a field to the embed (max 25).
   * @param {string} name The name of this field
   * @param {string} value The value of this field
   * @param {boolean} inline If this field will be displayed inline
   * @returns {this} This?
   */
  addField(
    name: string,
    value: string,
    inline = false,
  ): this {
    return this
      .addFields({
        inline,
        name,
        value,
      });
  }

  /**
   * Adds fields to the embed (max 25).
   * @param {FieldOptions[]} fields The fields to add
   * @returns {this} This?
   */
  addFields(...fields: EmbedFieldData[]): this {
    // eslint-disable-next-line no-restricted-syntax
    for (const data of fields) {
      const {
        name, value, inline,
      } = data;
      this.fields.push(
        Embed.normalizeField(
          name,
          value,
          inline,
        ),
      );
    }
    return this;
  }

  /**
   * Sets the thumbnail of this embed.
   * @param {EmbedInput} url The URL of the thumbnail
   * @returns {this} This?
   */
  setThumbnail(url: EmbedInput): this {
    return super.setThumbnail(this.resolveImage(url));
  }

  /**
   * Sets the image of this embed.
   * @param {EmbedInput} url The URL of the image
   * @returns {this} This?
   */
  setImage(url: EmbedInput): this {
    return super.setImage(this.resolveImage(url));
  }
  // #endregion
}
