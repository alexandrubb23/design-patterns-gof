import { IndexOutOfBoundsException } from './IndexOutOfBoundsException';

export class History<T> {
  private states: Array<T> = [];

  public push(state: T): void {
    this.states.push(state);
  }

  public pop(): T {
    const lastIndex = this.states.length - 2;
    if (lastIndex === -1) throw new IndexOutOfBoundsException(lastIndex);

    const lastState = this.states[lastIndex];
    this.states.pop();

    return lastState;
  }
}
