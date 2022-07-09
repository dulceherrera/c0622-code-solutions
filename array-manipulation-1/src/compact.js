/* exported compact */
function compact(array) {
  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i]) || array[i] === 0 || array[i] === null || array[i] === undefined || array[i] === false || array[i] === '' || array[i] === -Number) {
      return array.splice(i, 1);
    }
  }
}
