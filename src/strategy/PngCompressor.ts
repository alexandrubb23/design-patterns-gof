import { log } from '../utils';
import { Compressor } from './Compressor';

export class PngCompressor implements Compressor {
  compress(fileName: string): string {
    log(`Compressing ${fileName} using PNG`);

    return `Compressing ${fileName} using PNG`;
  }
}
