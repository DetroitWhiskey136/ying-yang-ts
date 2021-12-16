import { performance } from 'perf_hooks';

export class Stopwatch {
  decimal: number;
  startedAt: number;
  doneAt: number | null = null;

  constructor(decimal: number = 2) {
    this.decimal = decimal;
    this.startedAt = performance.now() * 1_000;
  }

  public stop(): string {
    this.doneAt = performance.now() * 1_000;
    return toString();
  }

  public toString(): string {
    const differ = (this.doneAt ?? performance.now() * 1_000) - this.startedAt; // microseconds
    if (differ < 1_000) {
      return `${differ.toFixed(this.decimal)}µs`;
    }
    if (differ < 1_000 * 1_000) {
      return `${(differ / 1_000).toFixed(this.decimal)}ms`;
    }
    return `${(differ / 1_000 / 1_000).toFixed(this.decimal)}s`;
  }
}
