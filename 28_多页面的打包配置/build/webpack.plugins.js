const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const generatePlugins = (configs) => {
  const plugins = [
    new CleanWebpackPlugin()
  ];
  Object.keys(configs.entry).forEach(file => {
    plugins.push(
      new HtmlWebpackPlugin({
        template: `./src/${file}.html`,
        filename: `${file}.html`,
        chunks: [file]
      })
    );
  })
  return plugins;
}

module.exports = generatePlugins;