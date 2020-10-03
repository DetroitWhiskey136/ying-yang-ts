/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import crypto from 'crypto';
import {
  Guild, GuildMember, MessageAttachment, MessageEmbed, User, MessageEmbedOptions, ImageURLOptions,
} from 'discord.js';
import ImageUtil from 'src/util/Image';

const EmbedColors = { error: 'RED', normal: '#00FFFF', warn: '0xfdfd96' } as const;

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

/**
 * Represents a rich embed in a message.
 */
export default class Embed extends MessageEmbed {
  options: EmbedOptions;

  /**
   * @param embedResolvable The embed resolvable
   * @param options The options for the embed
   * @param data The data of the embed
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

  setTemplate(user: User): void {
    if (this.options.autoAuthor) this.setAuthor(user);
    if (this.options.autoFooter) this.setFooter(user.tag);
    if (this.options.autoTimestamp) this.setTimestamp();
  }

  /**
   * Resolves a name
   * @param resolvable The resolvable to be resolved
   * @returns The resolved name
   */
  static resolveName(resolvable: EmbedInput): string {
    if (resolvable instanceof User) return resolvable.tag;
    if (resolvable instanceof GuildMember) return resolvable.user.tag;
    if (resolvable instanceof Guild) return resolvable.name;
    return resolvable;
  }

  static hasSupport(resolvable: any): boolean {
    return resolvable instanceof GuildMember
      || resolvable instanceof GuildMember
      || resolvable instanceof Guild;
  }

  /**
   * Resolves an icon
   * @param resolvable The resolvable to be resolved
   * @returns The resolved image url
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
      super.attachFiles([new MessageAttachment(defaultIcon, name)]);
      return `attachment://${name}`;
    }
    return resolvable;
  }

  /**
   * Sets the color of this embed to red
   */
  setError(): this {
    return this.setColor(EmbedColors.error);
  }

  /**
   * Sets the author of this embed.
   * @param name The name of the author
   * @param iconURL The icon URL of the author
   * @param url The URL of the author
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
   * @param text The text of the footer
   * @param iconURL The icon URL of the footer
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
   * @param description The description
   */
  setDescription(description: string): this {
    return super.setDescription(description);
  }

  /**
   * Sets the title of this embed.
   * @param title The title
   * @param options The options of the title
   */
  setTitle(title: string): this {
    return super.setTitle(title);
  }

  /**
   * Adds a field to the embed (max 25).
   * @param name The name of this field
   * @param value The value of this field
   * @param inline If this field will be displayed inline
   */
  addField(
    name: string | number,
    value: string | number,
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
   * @param fields The fields to add
   */
  addFields(...fields: FieldOptions[]): this {
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
   * @param url The URL of the thumbnail
   */
  setThumbnail(url: EmbedInput): this {
    return super.setThumbnail(this.resolveImage(url));
  }

  /**
   * Sets the image of this embed.
   * @param url The URL of the image
   */
  setImage(url: EmbedInput): this {
    return super.setImage(this.resolveImage(url));
  }
}
