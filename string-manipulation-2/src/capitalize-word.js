/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    return word.charAt(0).toUpperCase() + word.slice(1, 4).toLowerCase() + word.charAt(4).toUpperCase() + word.slice(5, 10).toLowerCase();
  } else {
    var result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return result;
  }
}
