/* exported titleCase */
function titleCase(title) {
  var resultStr = '';
  var capitalizedWord = '';
  var capitalizedArr = [];
  var words = title.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'javascript' || words[i] === 'javascript:') {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1, 4) + words[i][4].toUpperCase() + words[i].slice(5);
      capitalizedArr.push(capitalizedWord);
    } else if (words[i] === 'api') {
      capitalizedWord = 'API';
      capitalizedArr.push(capitalizedWord);
    } else if (i === 0) {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    } else if (capitalizedArr[i - 1].includes(':')) {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    } else if (words[i].includes('-')) {
      var letter = '';
      var hyphen = [];
      for (var x = 0; x < words[i].length; x++) {
        if (words[i][x - 1] === '-') {
          letter = words[i][x].toUpperCase();
          hyphen.push(letter);
        } else if (x === 0) {
          letter = words[i][x].toUpperCase();
          hyphen.push(letter);
        } else {
          letter = words[i][x];
          hyphen.push(letter);
        }
      }
      capitalizedArr.push(hyphen.join(''));
    } else if (words[i] === 'for' || words[i] === 'in' || words[i] === 'the' || words[i] === 'of' || words[i] === 'on' || words[i] === 'to' || words[i] === 'and') {
      capitalizedArr.push(words[i]);
    } else {
      capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
      capitalizedArr.push(capitalizedWord);
    }
  }
  resultStr = capitalizedArr.join(' ');
  return resultStr;
}
