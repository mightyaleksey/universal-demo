'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: path.resolve('./renderer'),

  output: {
    filename: 'do-not-use-it.js',
    path: path.resolve('static')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('common.css', {
      allChunks: true
    })
  ]
};
