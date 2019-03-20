const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);
