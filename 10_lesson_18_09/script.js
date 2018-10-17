function sortByAge(string) {
  var revertedString = getRevertedString(string);

  return revertedString;
}

function getRevertedString(text) {
  return text.split('').reverse().join('');
}

sortByAge('users');
