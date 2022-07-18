/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (({}).hasOwnProperty.call(source, key) && !({}).hasOwnProperty.call(target, key)) {
      target[key] = source[key];
    }
  }
  return target;
}
