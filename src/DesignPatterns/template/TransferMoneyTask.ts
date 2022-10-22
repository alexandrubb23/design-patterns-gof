import { Task } from './Task';

export class TransferMoneyTask extends Task {
  protected override doExecute(): string {
    return 'Transfer Money';
  }
}
