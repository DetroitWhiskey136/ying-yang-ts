/* eslint-disable no-restricted-syntax */
export class Type {
    value: unknown;
    is: string;
    childKeys: Map<string, Type>;
    childValues: Map<string, Type>;

    constructor(value: unknown) {
      this.value = value;
      this.is = Type.resolve(this.value);
      this.childKeys = new Map();
      this.childValues = new Map();
    }

    private get childTypes(): string {
      if (!this.childValues.size) return '';
      return `<${(this.childKeys.size ? `${Type.list(this.childKeys)}, ` : '') + Type.list(this.childValues)}>`;
    }

    public toString(): string {
      this.check();
      return `${this.is}${this.childTypes}`;
    }

    private addValue(value: unknown): void {
      const child = new Type(value);
      this.childValues.set(child.is, child);
    }

    private addEntry([key, value]: [string, unknown]): void {
      const child = new Type(key);
      this.childKeys.set(child.is, child);
      this.addValue(value);
    }

    private check(): void {
      if (Object.isFrozen(this)) return;

      if (this.value instanceof Map) {
        for (const entry of this.value) {
          this.addEntry(entry);
        }
      } else if (Array.isArray(this.value) || this.value instanceof Set) {
        for (const value of this.value) {
          this.addValue(value);
        }
      } else if (this.is === 'Object') {
        this.is = 'Record';
        for (const entry of Object.entries(this.value as Record<PropertyKey, unknown>)) {
          this.addEntry(entry);
        }
      }

      Object.freeze(this);
    }

    public static resolve(value: any): string {
      const type = typeof value;
      switch (type) {
        case 'object':
          return value === null ? 'null' : value.constructor && value.constructor.name;
        case 'function':
          return `${value.constructor.name}(${value.length}-arity)`;
        case 'undefined':
          return 'void';
        default:
          return type;
      }
    }

    private static list(values: Map<string, Type>): string {
      return [...values.values()].sort().join(' | ');
    }
}
