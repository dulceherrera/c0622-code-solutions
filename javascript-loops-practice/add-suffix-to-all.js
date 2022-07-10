/* exported addSuffixToAll */
/* -Make a array holder for the elements.
  -Look at each number from 0 to the length of the given element adding 1 each time
  -For each number:
    -Adding to the array holder the element given at the current number and add at the end of the word the other given element.
    -Return list to the arr */
function addSuffixToAll(words, suffix) {
  var arr = [];
  for (var i = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
  }
  return arr;
}
