/* exported getWords */
/* -If the length of the input value is greater or equal than 1:
    -Split the input value with a space.
  -If there is an empty  input value return a square bracket */
function getWords(string) {
  if (string.length >= 1) {
    return (string.split(' '));
  } else {
    return [];
  }
}
