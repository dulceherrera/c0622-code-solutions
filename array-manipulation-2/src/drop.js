/* exported drop */
function drop(array, count) {
  var newArr = array.slice(count, (array.length - 1));
  return newArr;
}
