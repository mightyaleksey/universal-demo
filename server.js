'use strict';

var format = require('util').format;
var interpolateName = require('loader-utils').interpolateName;
var hook = require('css-modules-require-hook');
var path = require('path');

hook({
  generateScopedName: function (exportedName, exportedPath) {
    var loaderContext = {resourcePath: exportedPath};
    var name = '[name]__[local]___[hash:base64:5]'.replace('[local]', exportedName);
    var options = {
      content: format('%s "./%s!.%s"',
        exportedName,
        path.relative(__dirname, require.resolve('postcss-loader/index.js')),
        exportedPath),
      context: __dirname
    };

    return interpolateName(loaderContext, name, options);
  }
});

require('babel/register');
require('./worker');
