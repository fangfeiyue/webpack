import { add } from './math';
import './index.css';
import { debug } from 'util';

function createDiv() {
  document.getElementById('root').append(document.createElement('div'));
}

add(1, 2);
createDiv();