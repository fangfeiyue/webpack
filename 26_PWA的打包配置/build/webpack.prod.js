const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const WorkboxPlugin = require('workbox-webpack-plugin');

const prodConfig = {
  mode: 'production',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // cacheId: 'webpack-pwa', // 设置前缀
      skipWaiting: true, // 强制等待中的 Service Worker 被激活
      clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
      // swDest: 'service-wroker.js', // 输出 Service worker 文件
      // globPatterns: ['**/*.{html,js,css,png.jpg}'], // 匹配的文件
      // globIgnores: ['service-wroker.js'], // 忽略的文件
      // runtimeCaching: [
      //     // 配置路由请求缓存
      //     {
      //         urlPattern: /.*\.js/, // 匹配文件
      //         handler: 'networkFirst' // 网络优先
      //     }
      // ]
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);