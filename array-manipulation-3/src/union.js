/* exported union */
function union(first, second) {
  var newArr = [];

  for (var i = 0; i < first.length; i++) {
    if (!newArr.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!newArr.includes(second[x])) {
      newArr.push(second[x]);
    }
  }
  return newArr;
}
