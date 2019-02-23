// import './index.css';
// import './index.scss';
import styles from './index.scss';
import { createDiv } from './createDiv';

function appendDiv() {
  const dom = document.getElementById('root');
  const div = document.createElement('div');
  
  div.classList.add(styles.content);
  div.innerText = 'webpack打包样式文件';
  dom.append(div);
}

appendDiv();
createDiv();
