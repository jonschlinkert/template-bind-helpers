# template-bind-helpers [![NPM version](https://img.shields.io/npm/v/template-bind-helpers.svg)](https://www.npmjs.com/package/template-bind-helpers) [![Build Status](https://img.shields.io/travis/jonschlinkert/template-bind-helpers.svg)](https://travis-ci.org/jonschlinkert/template-bind-helpers)

> Bind the current instance of a Templates-based application to an object of helpers, allowing them to be passed to a different render method.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i template-bind-helpers --save
```

## Usage

### bindHelpers

Bind helper functions to `app` so that, when the helper is called, the `this` keyword is set to the provided instance of `app`.

**Params**

* `app` **{Object}**: Instance of any [Templates-based][templates] application, such as [verb](https://github.com/verbose/verb), [assemble](http://assemble.io) or [generate](https://github.com/jonschlinkert/generate)
* `view` **{Object}**: The view being compiled or rendered
* `locals` **{Object}**: Context object with helpers to bind. This is usually the `options` object.
* `isAsync` **{Boolean}**
* `returns` **{Object}**

**Example**

```js
var bindHelpers = require('{%= name %}');
var str = '<%= replace("foo", "bar") %>';
opts = bindHelpers(this.app, opts, true);

// pass opts to a render method as context
app.render(str, opts, function(err, result) {
  console.log(result);
});
```

## Related projects

* [async-helpers](https://www.npmjs.com/package/async-helpers): Use async helpers in templates with engines that typically only handle sync helpers. Handlebars and… [more](https://www.npmjs.com/package/async-helpers) | [homepage](https://github.com/doowb/async-helpers)
* [engine-cache](https://www.npmjs.com/package/engine-cache): express.js inspired template-engine manager. | [homepage](https://github.com/jonschlinkert/engine-cache)
* [helper-cache](https://www.npmjs.com/package/helper-cache): Easily register and get helper functions to be passed to any template engine or node.js… [more](https://www.npmjs.com/package/helper-cache) | [homepage](https://github.com/jonschlinkert/helper-cache)
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://www.npmjs.com/package/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/template-bind-helpers/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on December 11, 2015._