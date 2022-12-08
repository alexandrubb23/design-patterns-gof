import { DataSource } from './DataSource';

export class SpreadSheet implements Observer {
  constructor(private dataSource: DataSource) {}

  update(): void {
    console.log(`Spreadsheet got notified: ${this.dataSource.getValue}`);
  }
}
