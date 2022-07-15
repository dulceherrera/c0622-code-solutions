/* exported tail */
/* -Make a holder for the output value
   - Look at each number from 1 (because you want to exclude the first element), check if the current
   number is less than the length of the input value and increment by 1 each time.
   -For each number:
      -Add to a output holder.
  -Return output */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
