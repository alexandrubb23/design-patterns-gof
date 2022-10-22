import { BlackAndWhiteFilter } from '../../src/DesignPatterns/strategy';

describe('BlackAndWhite Filter/', () => {
  it('should apply black and white filter on an image', () => {
    const blackAndWhite = new BlackAndWhiteFilter();

    const result = blackAndWhite.apply('dog');

    expect(result).toEqual('Applying B&W filter on dog');
  });
});
