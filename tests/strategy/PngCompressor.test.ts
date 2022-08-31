import { PngCompressor } from '../../src/strategy';

describe('PNG Compressor', () => {
  it('should compress an image using PNG', () => {
    const pngCompressor = new PngCompressor();

    const result = pngCompressor.compress('dog');

    expect(result).toEqual('Compressing dog using PNG');
  });
});
 