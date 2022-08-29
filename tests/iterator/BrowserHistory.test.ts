import { BrowserHistory } from '../../src/iterator/BrowserHistory';

describe('BrowserHistory Iterator Pattern /', () => {
  it('should iterate over browser history', () => {
    const history = new BrowserHistory();

    const urls = ['a', 'b', 'c'];
    urls.forEach(url => history.push(url));

    const iterator = history.createIterator();

    while (iterator.hasNext()) {
      const url = iterator.current();

      expect(url).toBe(urls[iterator.getCurrentIndex]);

      iterator.next();
    }
  });
});
