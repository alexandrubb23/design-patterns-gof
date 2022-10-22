import { Task } from './Task';

export class GenerateReportTask extends Task {
  protected override doExecute(): string {
    return 'Generate Report';
  }
}
