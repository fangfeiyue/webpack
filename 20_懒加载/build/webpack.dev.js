const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: false,
        default: false
      }
    }
  }
};

module.exports = merge(commonConfig, devConfig);
