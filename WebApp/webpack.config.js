var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: []
  }
}
