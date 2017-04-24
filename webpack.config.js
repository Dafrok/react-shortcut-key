const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, './docs/src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'react-shortcut-key',
    filename: './index.html'
  })]
}
