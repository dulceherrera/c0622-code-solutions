/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var splitFirstString = firstString.split('');
  var splitSecondString = secondString.split('');

  var secondStrArr = [];
  for (var i = 0; i < splitSecondString.length; i++) {
    if (splitSecondString[i] !== ' ') {
      secondStrArr.push(splitSecondString[i]);
    }
  }

  var firstStringArr = [];
  for (var x = 0; x < splitFirstString.length; x++) {
    if (splitFirstString[x] === undefined || splitFirstString[x] === ' ') {
      continue;
    } else {
      firstStringArr.push(splitFirstString[x]);
    }
  }

  var noSpaceFirst = firstStringArr.sort().join('');
  var noSpaceSecond = secondStrArr.sort().join('');

  if (noSpaceFirst === noSpaceSecond) {
    return true;
  } else {
    return false;
  }
}
