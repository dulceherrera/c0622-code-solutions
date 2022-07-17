/* exported chunk */
function chunk(array, size) {
  var newArr = [];
  var ind = 0;

  for (var i = 0; i < array.length / size; i++) {
    var temp = [];
    for (var k = 0; k < size; k++) {
      temp.push(array[ind]);
      ind++;
    }
    newArr.push(temp);
  }
  return newArr;
}
