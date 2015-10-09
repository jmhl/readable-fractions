'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader', query: { stage: 0 } },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
};
