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
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          "presets": [
            ["env", {
              targets: {
                browsers: ['last 2 versions']
              }
            }]
          ]
        }
      }
    ]
  }
}
