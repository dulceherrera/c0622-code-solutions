/* exported dropRight */
function dropRight(array, count) {
  if (count) {
    return array.slice(0, -count);
  } else {
    return array;
  }
}
