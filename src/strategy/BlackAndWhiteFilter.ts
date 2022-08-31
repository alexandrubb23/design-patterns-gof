import { Filter } from './Filter';

export class BlackAndWhiteFilter implements Filter {
  apply(fileName: string): string {
    console.log(`Applying B&W filter on ${fileName}`);

    return `Applying B&W filter on ${fileName}`;
  }
}
