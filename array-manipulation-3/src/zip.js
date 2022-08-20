/* exported zip */
function zip(first, second) {
  var newArr = [];
  var smallArr = [];
  var temporArr = [];

  if (first.length < second.length) {
    smallArr = first;
  } else {
    smallArr = second;
  }
  for (var i = 0; i < smallArr.length; i++) {
    temporArr.push(first[i]);
    temporArr.push(second[i]);
    newArr.push(temporArr);
    temporArr = [];
  }
  return newArr;
}
