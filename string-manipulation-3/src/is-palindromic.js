/* exported isPalindromic */
function isPalindromic(string) {
  var noSpace = string.split(' ');
  var joinStr = noSpace.join('');
  var splitChar = string.split('');
  var noSpace2 = [];

  for (var i = 0; i < splitChar.length; i++) {
    if (splitChar[i] !== ' ') {
      noSpace2.push(splitChar[i]);
    }
  }
  var revStr = noSpace2.reverse().join('');
  if (joinStr !== revStr) {
    return false;
  } else {
    return true;
  }
}
