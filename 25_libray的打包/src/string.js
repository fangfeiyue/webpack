import _ from 'lodash';

function join(a, b) {
  // return a + '' + b;
  return _.join([a, b], '_');
}

export {
  join
};