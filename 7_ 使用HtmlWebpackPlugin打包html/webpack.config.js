var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(eot|ttf|svg|woff)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'font/'
        },
      }]
    }, {
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 2
        }
      }, 'postcss-loader', 'sass-loader']
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin(['dist'])]
};