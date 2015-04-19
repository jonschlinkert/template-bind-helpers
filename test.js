/*!
 * template-bind-helpers <https://github.com/jonschlinkert/template-bind-helpers>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var templateBindHelpers = require('./');

describe('templateBindHelpers', function () {
  it('should:', function () {
    templateBindHelpers('a').should.eql({a: 'b'});
    templateBindHelpers('a').should.equal('a');
  });

  it('should throw an error:', function () {
    (function () {
      templateBindHelpers();
    }).should.throw('templateBindHelpers expects valid arguments');
  });
});
