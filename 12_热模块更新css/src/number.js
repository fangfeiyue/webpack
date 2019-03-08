function number() {
  const div = document.createElement('div');
  div.setAttribute('id', 'number');
  div.innerHTML = 10;
  div.onclick = function() {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1;
  };
  document.getElementById('root').appendChild(div);
}

export {
  number
};