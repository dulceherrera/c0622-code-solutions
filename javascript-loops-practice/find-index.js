/* exported findIndex */
/* -Look for each number from 0 and check if current number is less than the length of list given
  -For each number check:
    -if the value of the list at the current number is strictly equal to the value given:
      return the current number
    - if not:
        return -1 */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
