import { JpegCompressor } from "../../src/strategy";

describe('JPEG Compressor', () => {
  it('should compress an image using JPEG', () => {
    const jpegCompressor = new JpegCompressor();

    const result = jpegCompressor.compress('dog');

    expect(result).toEqual('Compressing dog using JPEG');
  });
});
