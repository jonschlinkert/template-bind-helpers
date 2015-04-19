/*!
 * template-bind-helpers <https://github.com/jonschlinkert/template-bind-helpers>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var bindHelpers = require('./');
var Template = require('template');
var helpers = require('template-helpers');
var _ = require('lodash');
var template;

function render(str, context) {
  try {
    var opts = {imports: context.imports};
    return _.template(str, opts)(context);
  } catch(err) {
    return err;
  }
}

describe('bindHelpers', function () {
  beforeEach(function () {
    template = new Template();
    template.engine('*', require('engine-lodash'));
    template.helpers(helpers._);
  });

  // make sure Template is working directly
  it('should render a template with a helper:', function () {
    template.render('I am: <%= name %>', {name: 'Jon'}).should.equal('I am: Jon');
    template.render('I am: <%= replace(name, "J", "Y") %>', {name: 'Jon'}).should.equal('I am: Yon');
  });

  // make sure our mock render method is working properly
  it('should render a template:', function () {
    render('I am: <%= name %>', {name: 'Jon'}).should.equal('I am: Jon');
  });

  // this is the test that matters
  it('should render a template with a helper:', function () {
    var opts = bindHelpers(template, {name: 'Jon', helpers: helpers._}, false);
    render('I am: <%= replace(name, "J", "Y") %>', opts).should.equal('I am: Yon');
  });

  it('should throw an error when `app` does not have a bindHelpers method:', function () {
    (function () {
      bindHelpers({});
    }).should.throw('template-bind-helpers expects app to have a bindHelpers method');
  });

  it('should throw an error when `context` is not an object:', function () {
    (function () {
      bindHelpers({bindHelpers: function() {}});
    }).should.throw('template-bind-helpers expects a context object.');
  });
});
