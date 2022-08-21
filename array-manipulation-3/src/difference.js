/* exported difference */
function difference(first, second) {
  var newArr = [];

  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!first.includes(second[x])) {
      newArr.push(second[x]);
    }
  }
  return newArr;
}
