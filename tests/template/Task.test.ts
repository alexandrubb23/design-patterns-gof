import {
  AuditTrail,
  GenerateReportTask,
  Task,
  TransferMoneyTask,
} from '../../src/DesignPatterns/template';

const auditTrail = jest.spyOn(AuditTrail.prototype, 'record');

describe('Task Template Pattern', () => {
  describe('TransferMoneyTask', () => {
    let transferMoney: Task;
    beforeEach(() => {
      transferMoney = new TransferMoneyTask();
    });

    it('should be able to transfer money', () => {
      const result = transferMoney.execute();

      expect(result).toBe('Transfer Money');
    });

    it('should call the audit trail', () => {
      transferMoney.execute();

      expect(auditTrail).toBeCalledTimes(1);
    });
  });

  describe('GenerateReportTask', () => {
    let generateReport: Task;
    beforeEach(() => {
      generateReport = new GenerateReportTask();
    });

    it('should be able to generate a report', () => {
      const result = generateReport.execute();

      expect(result).toBe('Generate Report');
    });

    it('should call the audit trail', () => {
      generateReport.execute();

      expect(auditTrail).toBeCalledTimes(1);
    });
  });
});
