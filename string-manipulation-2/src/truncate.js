/* exported truncate */
function truncate(length, string) {
  var trimmed = string.substring(0, length) + '...';
  return trimmed;
}
