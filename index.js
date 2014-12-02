'use strict';

var _ = require('lodash');
var semver = require('semver');

exports.validVersion = function(versions, version) {
  if (~versions.indexOf(version)) {
    return version;
  }
  return _.last(_.filter(versions, function(v) {
    return semver.compare(v, version) === -1;
  }));
};
