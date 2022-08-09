/* exported omit */
function omit(source, keys) {
  var obj = {};
  for (var key in source) {
    if (keys.includes(key)) continue;
    obj[key] = source[key];
  }
  return obj;
}
