const webpack = require('webpack');

module.exports = {
  mode: 'production',

  //define extry point
  entry: './app.js',

  //define output point
  output: {
    filename: './_build/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
