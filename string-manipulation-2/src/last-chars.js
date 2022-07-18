/* exported lastChars */
function lastChars(length, string) {
  if (string.length > length) {
    string = string.substr(string.length - length);
  } else {
    return string;
  }
  return string;
}
