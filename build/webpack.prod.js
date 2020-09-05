'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = merge(common, {
  mode: 'production',
  devtool: "nosource-source-map",
  output : {
    path : path.resolve(__dirname , '../dist'),
    filename: 'js/[name].[hash].bundle.js',
    chunkFilename: 'js/[id].[hash].bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
      rules: [
        {
          test: /\.sa?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [".html", "css/*.*", "js/*.*"]
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/[chunkhash].style.css',
        chunkFilename: 'css/[chunkhash].style.css',
      })
    ]
});

module.exports = webpackConfig;
