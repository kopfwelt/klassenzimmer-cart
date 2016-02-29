# Cart

Create a cart class and corresponding tests.

The cart should save, read and delete simple objects. As storing enging the cart should have at least two of the following options:

* Cookie
* Session
* Local storage
* Service worker
* Web SQL

The cart implementation should be designed either as class with inheritance (baseclass, subclasses) or module following functional programming or classic OOP.

The tests should cover all methods.

### Articles
[Closures are not magic](http://renderedtext.com/blog/2015/11/18/closures-are-not-magic/)

[Writing Next Generation Reusable JavaScript Modules in ECMAScript 6](https://www.smashingmagazine.com/2016/02/writing-next-generation-reusable-javascript-modules/)

[ES6 Web Components Part 1 – A Man Without a Framework](http://www.benfarrell.com/2015/10/26/es6-web-components-part-1-a-man-without-a-framework/)

[Unpacking Webpack+](http://blog.tighten.co/unpacking-webpack)


## Usage
Both command can be run parallel and do watch your files for changes.

**Start**

```npm start```

**Test**

```npm test```

**Metrics**

```npm metrics```


## Installation
Install webpack:
```
npm install webpack webpack-dev-server -g
```

Install *KARMA* and [framework adapters](https://npmjs.org/browse/keyword/karma-adapter):

```
npm install -g karma karma-browserify karma-mocha karma-chai karma-chrome-launcher karma-coverage karma-firefox-launcher karma-phantomjs-launcher karma-sauce-launcher karma-sinon
```

Install *mocha*, *chai*, *sinon*:

```
npm install -g mocha chai sinon
```

Install *PhantomJS* via homebrew (or [direct download](http://phantomjs.org)):

```
brew update && brew install phantomjs
```

Install *Plato*:

In case plato is already installed. Remove Plato and install the ES6 fork.

```
npm uninstall plato
```

Install the ES6 fork by [deedubs](https://github.com/deedubs/es6-plato):

```
npm install -g git+https://github.com/deedubs/es6-plato.git
```

## Copyright

Copyright 2016 Kopfwelt GmbH.
