/* exported capitalize */
/*
Return the first letter of the input value in upper case and add the rest of the word in lower case */
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
