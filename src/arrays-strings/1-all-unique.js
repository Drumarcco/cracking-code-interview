exports.allCharactersAreUnique = allCharactersAreUnique;

function allCharactersAreUnique(string) {
  for(var i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) != i) return false;
  }

  return true;
}
