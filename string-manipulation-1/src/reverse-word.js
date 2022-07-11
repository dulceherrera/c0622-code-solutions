/* exported reverseWord */
/* -Make a holder for the new word
  -Look for each number starting from the last element of the input value, check each time if the current number is greater or
  equal than 0, and decrement by 1.
  -For each number:
   -Adding the value of the word at the current number to the holder
   -Return the holder from the function  */
function reverseWord(word) {
  var str = '';
  for (var i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  return str;
}
