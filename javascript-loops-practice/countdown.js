/* exported countdown */
/* -Make a holder for the values
    -As long as the value of the number is greater than or equal to 0:
        add number to holder
    -Return values of the holder */
function countdown(number) {
  var arr = [];
  while (number >= 0) {
    arr.push(number);
    number--;
  } return arr;
}
