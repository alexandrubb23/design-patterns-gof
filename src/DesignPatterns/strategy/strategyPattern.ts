import { BlackAndWhiteFilter } from './BlackAndWhiteFilter';
import { ImageStorage } from './ImageStorage';
import { JpegCompressor } from './JpegCompressor';

const imageStorage = new ImageStorage();
imageStorage.store('a', new JpegCompressor(), new BlackAndWhiteFilter());
