function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Fang', 'Fei', 'Yue'], '_');
    return element;
  });
}

getComponent().then(element => {
  document.body.append(element);
});
