exports.isAnagram = isAnagram;

function isAnagram(string) {
  string = string.replace(/ /g, '').toLowerCase();

  for(var i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }

  return true;
}
