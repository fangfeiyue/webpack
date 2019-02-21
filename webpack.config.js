const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/1webpack初识/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
