/* exported toObject */
/* Make a holder for the array.This will be to contain temporary values.
  -Look at each number from 0, check if the current number is less than the length of the input, and
  increment it by 1.
  -For each number:
    -if the remainder of the current number divided by 2 is strictly equal to 0:
      -create a holder for the key value pairs.
      -The input value at the position of the current number plus 1, is assigned to
      the holder created previously at the input at the current number.
      -Add the previous value to the holder for the key value pairs
      -Return the object */
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
