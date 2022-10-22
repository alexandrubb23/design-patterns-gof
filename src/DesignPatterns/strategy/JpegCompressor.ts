import { log } from '../../utils';
import { Compressor } from './Compressor';

export class JpegCompressor implements Compressor {
  compress(fileName: string): string {
    log(`Compressing ${fileName} using JPEG`);

    return `Compressing ${fileName} using JPEG`;
  }
}
