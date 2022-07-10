/* exported getIndexes */
/* -Make a list to hold the result
   -Look if the current value is less than the length of the input list
   -For each number:
      -Add the current number to the list holder
  -Return list to holder */
function getIndexes(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(i);
  }
  return arr;
}
