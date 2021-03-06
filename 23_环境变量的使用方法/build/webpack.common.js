const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const merge = require('webpack-merge');

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
        loader: "babel-loader" }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin()
  ]
};

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  }else {
    merge(commonConfig, devConfig)
  }
};