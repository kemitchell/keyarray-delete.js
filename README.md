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
