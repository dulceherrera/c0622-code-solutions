/* exported ransomCase */
function ransomCase(string) {
  var newWord = string.toUpperCase().split('');
  for (var i = 0; i < newWord.length; i += 2) {
    newWord[i] = newWord[i].toLowerCase();
  }
  return newWord.join('');
}
