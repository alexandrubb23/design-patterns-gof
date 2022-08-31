import {
  BlackAndWhiteFilter,
  Compressor,
  Filter,
  ImageStorage,
  JpegCompressor,
  PngCompressor,
} from '../../src/strategy';

describe('ImageStorage Strategy Pattern /', () => {
  let filter: Filter;
  let compressor: Compressor;
  let storedImage: boolean;

  const storeImage = (fileName: string) => {
    const imageStorage = new ImageStorage();

    storedImage = imageStorage.store(fileName, compressor, filter);
  };

  it('should compress an image as a JPEG and apply black and white filter on it', () => {
    compressor = new JpegCompressor();
    filter = new BlackAndWhiteFilter();

    storeImage('dog');

    expect(storedImage).toEqual(true);
  });

  it('should compress an image as a PNG and apply black and white filter on it', () => {
    compressor = new PngCompressor();
    filter = new BlackAndWhiteFilter();

    storeImage('cat');

    expect(storedImage).toEqual(true);
  });
});
