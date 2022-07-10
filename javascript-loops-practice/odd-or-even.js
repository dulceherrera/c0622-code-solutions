/* exported oddOrEven */
/* -Make a holder for the output list
   -Look at each number from 0 and check if the current number is less than the length of the input numbers.
    -If the remainder of dividing the value of the numbers at the current number by two, is unequal to 1:
      -Add to the holder the word "even"
    - If it is not equal to 1:
      -Add to the holder the word "odd"
    Return the list to the golder */
function oddOrEven(numbers) {
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 1) {
      arr.push('even');
    } else {
      arr.push('odd');
    }
  } return arr;
}
