keyarray-delete.js
==================

[![NPM version](https://img.shields.io/npm/v/keyarray-delete.svg)](https://www.npmjs.com/package/keyarray-delete)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-delete.js.svg)](http://travis-ci.org/kemitchell/keyarray-delete.js)

Delete nested properties with key arrays.

```javascript
var del = require('keyarray-delete');

var anObject = {
  a: {
    b: 'value',
    c: 'another'
  }
}

del(anObject, ['a', 'b']) // === true

anObject.a.hasOwnProperty('b') // === false

anObject.a.c // === 'another'

del(anObject, ['nonexistent']) // === true

del(anObject, ['nonexistent', 'key']) // throws TypeError
```
