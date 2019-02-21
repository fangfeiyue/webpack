const path = require("path");

module.exports = {
  mode: "development",
  // entry: "./src/1webpack初识/index.js",
  entry: "./src/2loader/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: "imgs"
        }
      }
    }]
  }
};
