import { Iterator } from './Iterator';

export class BrowserHistory {
  private urls: string[] = [];
  private count: number = 0;

  public push(url: string): void {
    this.urls[this.count++] = url;
  }

  public pop(): string {
    return this.urls[--this.count];
  }

  public createIterator(): Iterator<string> {
    return new BrowserHistory.ArrayIterator(this);
  }

  static ArrayIterator = class implements Iterator<string> {
    private index: number = 0;

    constructor(private history: BrowserHistory) {
      this.history = history;
    }

    public hasNext(): boolean {
      return this.index < this.history.count;
    }

    public current(): string {
      return this.history.urls[this.index];
    }

    public next(): void {
      this.index++;
    }

    public get getCurrentIndex(): number {
      return this.index;
    }
  };
}
