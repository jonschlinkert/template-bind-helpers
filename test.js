/*!
 * template-bind-helpers <https://github.com/jonschlinkert/template-bind-helpers>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var should = require('should');
var bindHelpers = require('./');
var Templates = require('templates');
var helpers = require('template-helpers');
var _ = require('lodash');
var app;

function render(str, context, cb) {
  try {
    var opts = {imports: context.imports};
    cb(null, _.template(str, opts)(context));
  } catch(err) {
    cb(err);
  }
}

describe('bindHelpers', function () {
  beforeEach(function () {
    app = new Templates();
    app.engine('*', require('engine-base'));
    app.option('view engine', '*');
    app.helpers(helpers._);
    app.create('pages');
  });

  // make sure Template is working directly
  it('should render a template with a helper:', function (cb) {
    app.page('foo', {content: 'I am: <%= name %>'});
    app.render('foo', {name: 'Jon'}, function(err, res) {
      if (err) return cb(err);
      assert.equal(res.content, 'I am: Jon');
      cb();
    });
  });

  it('should render a template with multiple params:', function (cb) {
    app.page('bar', {content: 'I am: <%= replace(name, "J", "Y") %>'});
    app.render('bar', {name: 'Jon'}, function(err, res) {
      if (err) return cb(err);
      assert.equal(res.content, 'I am: Yon');
      cb();
    });
  });

  // this is the test that matters
  it('should render a template with a helper:', function(cb) {
    var view = app.page('baz', {content: 'I am: <%= replace(name, "J", "Y") %>'});
    var opts = bindHelpers(app, view, {name: 'Jon', helpers: helpers._}, false);
    render(view.content, opts, function(err, res) {

      if (err) return cb(err);
      assert.equal(res, 'I am: Yon');
      cb();
    });
  });
});
