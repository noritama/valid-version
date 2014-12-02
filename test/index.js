'use strict';

var vv = require('../').validVersion;
var assert = require('power-assert');

describe('validVersion', function() {
  it('should return match version', function() {
    assert(vv(['0.0.1', '0.0.2'], '0.0.1') === '0.0.1');
  });

  it('should return valid version', function() {
    assert(vv(['0.0.1', '0.0.2'], '0.1.0') === '0.0.2');
  });

  it('should return undefined', function() {
    assert(vv(['0.0.2'], '0.0.1') === undefined);
  });
});
