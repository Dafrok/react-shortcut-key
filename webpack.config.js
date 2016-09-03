const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './index.js',
  output: './index.js',
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: "babel", include: path.join(__dirname, 'src')}
    ]
  }
}
