// 主要实现异步代码分割去掉vendor
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{ 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      // async：仅对异步进行分割
      // all：对同步代码和异步代码都进行分割
      // initial：仅对同步代码进行分割
      chunks: 'all',
      // 引入的三方库大于30000字节才进行代码分割
      minSize: 30000,
      // 
      maxSize: 0,
      // 当一个库被用了几次才做代码分割
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      // 文件连接符
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js'
        },
        default: {
          minChunks: 2,
          priority: -20,
          // 如果一个模块被打包过了就忽略这个模块
          reuseExistingChunk: true
        }
      }
    }
  }
}