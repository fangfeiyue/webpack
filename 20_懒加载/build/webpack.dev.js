const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    usedExports: true
  }
};

module.exports = merge(commonConfig, devConfig);
