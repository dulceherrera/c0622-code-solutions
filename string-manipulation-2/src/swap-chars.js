/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var swap = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = swap;
  string = string.join('').toString();
  return string;
}
