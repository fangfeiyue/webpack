import { add } from './math';
import './index.css';

function createDiv() {
  document.getElementById('root').append(document.createElement('div'));
}

add(1, 2);
createDiv();