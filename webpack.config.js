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
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'react-shortcut-key',
    filename: './index.html'
  })]
}
