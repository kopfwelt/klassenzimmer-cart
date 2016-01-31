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

## Usage

**Start**

```npm start```

**Test**

```npm test```


## Installation

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

## Copyright

Copyright 2016 Kopfwelt GmbH.
