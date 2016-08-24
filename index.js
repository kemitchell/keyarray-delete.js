var get = require('keyarray-get')

module.exports = function (object, keyArray) {
  var length = keyArray.length
  var parent = get(object, keyArray.slice(0, length - 1))
  if (parent === undefined) {
    throw new TypeError()
  } else {
    delete parent[keyArray[length - 1]]
    return true
  }
}
