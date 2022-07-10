/* exported getStudentNames */
/* -Make a holder for the list of names
  -Look at each number from 0 to the length of the list given and 1 each time
  -For each number:
    -The value of the golder at the current number is going to be the name of the student in the position of the current number.
  -Return list to arr   */
function getStudentNames(students) {
  var arr = [];

  for (var i = 0; i < students.length; i++) {
    arr[i] = students[i].name;
  }
  return arr;
}
