import { GenerateReportTask } from './GenerateReportTask';
import { Task } from './Task';
import { TransferMoneyTask } from './TransferMoneyTask';

const transferMoney: Task = new TransferMoneyTask();
console.log(transferMoney.execute());

console.log('#############################');

const generateReport: Task = new GenerateReportTask();
console.log(generateReport.execute());
