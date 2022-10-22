import { Compressor } from './Compressor';
import { Filter } from './Filter';

export class ImageStorage {
  store(fileName: string, compressor: Compressor, filter: Filter) {
    compressor.compress(fileName);
    filter.apply(fileName);

    return true;
  }
}
