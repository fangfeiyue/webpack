const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 2
          }
        },
        'postcss-loader',
        'sass-loader'],
      },{ 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }, {
          // 将this指向window
          loader: 'imports-loader?this=>window'
        }]
      }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      // 当发现一个模块用了$这个字符串，会自动为这个模块引入jquery
      $: 'jquery',
      // 给某个包中的特定方法起别名,如myUI.js中$('body').css('background', _join(['blue'], ''));
      _join: ['lodash', 'join']
    })
  ]
};

module.exports = commonConfig;