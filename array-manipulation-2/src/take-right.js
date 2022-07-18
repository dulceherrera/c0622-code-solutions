/* exported takeRight */
function takeRight(array, count) {
  if (array.length < count) {
    return array;
  } else {
    var newArr = [];
    var leng = array.length;
    var j = 0;
    for (var i = leng - count; i < leng; i++) {
      newArr[j] = array[i];
      j++;
    }
    return newArr;
  }
}
