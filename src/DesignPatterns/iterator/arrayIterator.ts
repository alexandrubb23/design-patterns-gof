import { log } from '../../utils';
import { BrowserHistory } from './BrowserHistory';

const history = new BrowserHistory();
history.push('a');
history.push('b');
history.push('c');

const iterator = history.createIterator();
while (iterator.hasNext()) {
  const url = iterator.current();
  log(url);
  iterator.next();
}
