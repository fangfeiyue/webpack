const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // 如果打包的时候碰到lodash这个库就忽略到这个库
  // externals: ["lodash"],
  // externals: {
  //   lodash: {
  //     // 代表commonjs引入的话业务代码中的名字必须是lodash
  //     commonjs: 'lodash',
  //     root: '_'
  //   }
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    // libraryTarget: 'umd'
    // 将library绑定到全局this上
    libraryTarget: 'this'
  }
};