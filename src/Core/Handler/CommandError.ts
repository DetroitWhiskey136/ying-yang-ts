export declare interface CommandErrorField {
  inline: boolean;
  name: string;
  value: string;
}

export declare interface CommandErrorOptions {
  onUsage?: boolean;
  fields?: Array<CommandErrorField>;
  delete?: boolean;
}

export declare interface CommandError {
  options: CommandErrorOptions;
  onUsage: boolean;
  fields: Array<CommandErrorField>;
  delete: boolean;
}

export class CommandError extends Error {
  constructor(message: string, options: CommandErrorOptions) {
    super(message);
    this.options = options;
    this.onUsage = !!options.onUsage || false;
    this.fields = [];
    this.delete = !!options.delete || false;
  }

  /**
   * Adds a field to the Error embed.
   * @param {string} name The name of the field.
   * @param {string} value The value for the field.
   * @param {boolean} [inline=false] Whether the field should be inline.
   * @returns {CommandError} The error embed.
   */
  addField(name: string, value: string, inline: boolean = false) {
    this.fields.push({ inline, name, value });
    return this;
  }
}
