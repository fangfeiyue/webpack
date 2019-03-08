const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  module: {
    rules: [{ 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        // options: {
        //   presets: ["@babel/preset-env"]
        // }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};