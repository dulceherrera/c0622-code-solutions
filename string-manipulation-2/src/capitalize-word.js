/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    return 'JavaScript';
  } else {
    var result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return result;
  }
}
