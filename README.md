```javascript
var del = require('keyarray-delete')
var assert = require('assert')

var anObject = {
  a: {
    b: 'value',
    c: 'another'
  }
}

assert(del(anObject, ['a', 'b']) === true)

assert(anObject.a.hasOwnProperty('b') === false)

assert(anObject.a.c === 'another')

assert(del(anObject, ['nonexistent']) === true)

assert.throws(function () {
  del(anObject, ['nonexistent', 'key'])
}, TypeError)
```
