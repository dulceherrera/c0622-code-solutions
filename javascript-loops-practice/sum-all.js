/* exported sumAll */
/* -Set an initial value for the sum.Since there is not value any value to add, for the moment it will be 0.
  -Look if the current value is less than the length of the input value.
  -Add the current value to the sum variable
  -Return value to sum */
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
