const path = require('path');
const generatePlugins = require('./webpack.plugins');

const commonConfig = {
  entry: {
    index: './src/index.js',
    detail: './src/detail.js',
    card: './src/card.js'
  },
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
  }
};

commonConfig.plugins = generatePlugins(commonConfig);

module.exports = commonConfig;