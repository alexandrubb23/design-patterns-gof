import { log } from '../utils';
import { Filter } from './Filter';

export class BlackAndWhiteFilter implements Filter {
  apply(fileName: string): string {
    log(`Applying B&W filter on ${fileName}`);

    return `Applying B&W filter on ${fileName}`;
  }
}
