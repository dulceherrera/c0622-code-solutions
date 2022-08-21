/* exported reverseWords */
function reverseWords(string) {
  var splitString = string.split(' ');
  var reverseStrArr = [];

  for (var i = 0; i < splitString.length; i++) {
    reverseStrArr.push(splitString[i].split('').reverse().join(''));
  }
  var reverseString = reverseStrArr.join(' ');
  return reverseString;
}
