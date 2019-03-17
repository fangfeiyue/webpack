const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  
};

merge(commonConfig, prodConfig);