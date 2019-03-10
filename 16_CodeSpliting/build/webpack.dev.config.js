const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    // tree shaking
    usedExports: true,
    // code spliting
    splitChunks: {
      chunks: 'all'
    }
  }
};

module.exports = merge(commonConfig, devConfig);
