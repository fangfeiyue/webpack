import { number } from './number';
import { counter } from './counter';

counter();
number();

if (module.hot) {
  module.hot.accept('./number', () => {
    document.getElementById('root').removeChild(document.getElementById('number'));
    number();
  })
}
