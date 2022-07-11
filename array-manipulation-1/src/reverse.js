/* exported reverse */
/* -Make a holder for the output value.
   -Look at each number starting at the last element of the input, check if the current number is greater or equal to 0, and increment by 1.
   -For each number:
      --Add the element of the input at the current number (current position) to the holder.
   -Return the list to the holder */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
