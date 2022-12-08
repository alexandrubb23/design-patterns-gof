import { Subject } from './Subject';

export class DataSource extends Subject {
  private value: number = 0;

  get getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
    this.notifyObservers();
  }
}
