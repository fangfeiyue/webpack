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
        options: {},
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
  }
};