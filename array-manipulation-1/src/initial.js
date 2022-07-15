/* exported initial */
/* -Make a holder for the output list.
  - Look at each number from 0, check if the current number is less than the length of the input
  value -1, which is the last element of the array, and increment by 1 each time.
  -For each number:
    -Add the input value at the current number to the output holder. */
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
