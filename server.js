'use strict';

var format = require('util').format;
var interpolateName = require('loader-utils').interpolateName;
var hook = require('css-modules-require-hook');
var path = require('path');
var loaderPath = path.relative(__dirname, require.resolve('postcss-loader/index.js'));

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});

require('babel/register');
require('./worker');
