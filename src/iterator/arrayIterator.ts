import { BrowserHistory } from './BrowserHistory';

const history = new BrowserHistory();
history.push('a');
history.push('b');
history.push('c');

const iterator = history.createIterator();
while (iterator.hasNext()) {
  const url = iterator.current();
  console.log(url);
  iterator.next();
}
