import { log } from '../../utils';
import { GenerateReportTask } from './GenerateReportTask';
import { Task } from './Task';
import { TransferMoneyTask } from './TransferMoneyTask';

const transferMoney: Task = new TransferMoneyTask();
log(transferMoney.execute());

log('#############################');

const generateReport: Task = new GenerateReportTask();
log(generateReport.execute());
