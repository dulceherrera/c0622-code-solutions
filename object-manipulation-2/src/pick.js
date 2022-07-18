/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (var k of keys) {
    var sourceK = source[k];
    if (sourceK !== undefined) {
      obj[k] = sourceK;
    }
  }
  return obj;
}
