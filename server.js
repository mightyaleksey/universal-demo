'use strict';

var hook = require('css-modules-require-hook');

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});

require('babel/register');
require('./worker');
