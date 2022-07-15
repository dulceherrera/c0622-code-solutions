/* exported filterOutNulls */
/* -Make a holder for the list
    -Look at each number from 0 and check if the current number is less than the length of the input value
    -For each number:
      -If the value in the values at the current number is unequal to null :
        -Add the value at the current number to the holder list.
    -Return list to arr */
function filterOutNulls(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      arr.push(values[i]);
    }
  }
  return arr;
}
