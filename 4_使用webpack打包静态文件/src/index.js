// import './index.css';
import './index.scss';

function appendDiv() {
  const dom = document.getElementById('root');
  const div = document.createElement('div');
  
  div.classList.add('content');
  div.innerText = 'webpack打包样式文件';
  dom.append(div);
}

appendDiv();
