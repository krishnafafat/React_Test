const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './app/index.js',
  devServer: {
    hot: true,
  },
  module : {
    rules : [
      {
        test : /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test : /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin ({
      template : './public/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
