import './index.css';

var btn = document.createElement('button');
btn.innerHTML = '新增';
console.log('创建了页面');
document.body.appendChild(btn);
btn.onclick = function() {
  var div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
};
