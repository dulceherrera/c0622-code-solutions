/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray[i] = array[array.length - i - 1];
  }
  return newArray;
}
