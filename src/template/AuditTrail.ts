import { log } from '../utils';

export class AuditTrail {
  record(): string {
    log('Audit');

    return 'Audit';
  }
}
