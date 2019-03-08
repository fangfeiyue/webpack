function counter() {
  const div = document.createElement('div');
  div.setAttribute('id', 'counter');
  div.innerHTML = 1;
  div.onclick = function() {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1;
  };
  document.getElementById('root').appendChild(div);
}

export {
  counter
};