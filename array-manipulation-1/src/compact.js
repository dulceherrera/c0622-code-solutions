/* exported compact */
/* -Make a holder for the new list.
  -Look at each number from 0, check if the current number is less than the length of the input value,
  increment it  the current number by 1 each time.
  -Convert the input value at the current number in a primitive boolean value (true/false) and assign a
  new variable.
  -If the new variable is strictly equal to true:
    -Add the input at current number to the holder.
  -Return the list to the holder */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var x = Boolean(array[i]);
    if (x === true) {
      arr.push(array[i]);
    }
  }
  return arr;
}
