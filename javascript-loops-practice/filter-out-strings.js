/* exported filterOutStrings */
/* -Make a holder for number values.
  -Look at each number from 0 to the length of the input valuesand increment it by 1.
  -For each number:
    -If the current value at values is strictly equal to a number:
      -Adding the value to the holder
  -Return the numbers to arr     */
function filterOutStrings(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') arr.push(values[i]);
  }
  return arr;
}
