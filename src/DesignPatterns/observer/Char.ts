import { DataSource } from './DataSource';

export class Char implements Observer {
  constructor(private dataSource: DataSource) {}

  update(): void {
    console.log(`Char got notified: ${this.dataSource.getValue}`);
  }
}
