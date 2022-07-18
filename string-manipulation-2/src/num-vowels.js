/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var array = string.toLowerCase().split('');
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(array[i])) {
      count++;
    }
  }
  return count;
}
