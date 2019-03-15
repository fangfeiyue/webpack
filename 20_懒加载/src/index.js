function getComponent() {
  return import('lodash').then(({default: _}) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'world'], '_');
    return element;
  });
}

document.addEventListener('click', function(){
  getComponent().then(element => {
    document.body.appendChild(element)
  });
});
