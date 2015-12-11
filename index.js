/*!
 * template-bind-helpers <https://github.com/jonschlinkert/template-bind-helpers>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');

/**
 * Bind helper functions to `app` so that, when the helper is called,
 * the `this` keyword is set to the provided instance of `app`.
 *
 * ```js
 * var bindHelpers = require('{%= name %}');
 * var str = '<%%= replace("foo", "bar") %>';
 * opts = bindHelpers(this.app, opts, true);
 *
 * // pass opts to a render method as context
 * app.render(str, opts, function(err, result) {
 *   console.log(result);
 * });
 * ```
 *
 * @param  {Object} `app` Instance of any [Templates-based][templates] application, such as [verb][], [assemble][] or [generate][]
 * @param  {Object} `view` The view being compiled or rendered
 * @param  {Object} `locals` Context object with helpers to bind. This is usually the `options` object.
 * @param  {Boolean} `isAsync`
 * @return {Object}
 * @api public
 */

module.exports = function bindHelpers(app, view, locals, isAsync) {
  if (!('bindHelpers' in app) || !isObject(app)) {
    throw new Error('expected app to be an object with a bindHelpers method');
  }

  if (!isObject(view)) {
    throw new Error('expected view to be an object.');
  }

  if (!isObject(view)) {
    throw new Error('expected locals to be an object.');
  }

  app.bindHelpers.call(app, view, locals, app.context, isAsync);
  locals.imports = locals.helpers;
  return locals;
};
