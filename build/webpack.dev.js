'use strict';

const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');

const webpackConfig = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  module : {
    rules : [
      {
        test: /\.sa?css$/,
        use: ['style-loader', "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'inline-source-map',
});

module.exports = webpackConfig;
