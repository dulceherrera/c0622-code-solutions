/* exported getValues */
/* -Create a holder for the list of the values
  -For each property in the input:
    -Add the value of the object at the property to the holder.
  -Return the output */
function getValues(object) {
  var arr = [];
  for (var key in object) {
    arr.push(object[key]);
  }
  return arr;
}
