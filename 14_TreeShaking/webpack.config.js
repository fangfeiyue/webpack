const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  // devtool: 'cheap-moudle-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // optimization: {
  //   usedExports: true
  // }
};
