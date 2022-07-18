/* exported take */
function take(array, count) {
  var newArr = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      newArr[i] = array[i];
    }
  }
  return newArr;
}
