import { AuditTrail } from './AuditTrail';

export abstract class Task {
  private auditTrail: AuditTrail;

  constructor() {
    this.auditTrail = new AuditTrail();
  }

  execute(): string {
    this.auditTrail.record();

    return this.doExecute();
  }

  protected abstract doExecute(): string;
}
