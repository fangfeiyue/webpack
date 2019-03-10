// tongh
// import _ from 'lodash';

// console.log(_.join(['a', 'b', 'c'], '__'));
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));


// 异步创建
function getCompoent() {
  return import('lodash').then(({default: _}) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['fang', 'fei', 'yue'], '_');
    return element;
  })
}

getCompoent().then(element => document.body.append(element));

