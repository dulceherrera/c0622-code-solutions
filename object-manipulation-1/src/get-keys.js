/* exported getKeys */
/* -Make a holder for the output.
  -For each property of the input:
    -Add the property to the holder.
  -Return the value of the output */
function getKeys(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(keys);
  }
  return arr;
}
