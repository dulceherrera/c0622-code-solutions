/* exported includesSeven */
/* -Set an value with length of the input list
  -While the previously established value decreases by 1 look if:
    -the value of list at the current number is strictly equal to the number 7
       -give the true word
    -if is not strictly equal to 7
      -give the true false  */

function includesSeven(array) {
  var i = array.length;
  while (i--) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
