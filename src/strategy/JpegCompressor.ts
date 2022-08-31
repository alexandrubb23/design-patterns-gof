import { Compressor } from './Compressor';

export class JpegCompressor implements Compressor {
  compress(fileName: string): string {
    console.log(`Compressing ${fileName} using JPEG`);

    return `Compressing ${fileName} using JPEG`;
  }
}
