exports.isSubstring = isSubstring;

function isSubstring(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (var i = 0; i < str1.length; i++) {
    var substr1 = str1.substring(0, i);
    var substr2 = str1.substring(i);

    if (str2.indexOf(substr1) && str2.indexOf(substr2)) {
      return true;
    }
  }

  return false;
}
