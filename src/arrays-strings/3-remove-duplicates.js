exports.removeDuplicates = removeDuplicates;

function removeDuplicates(string) {
    for(var i = 0; i < string.length; i++) {
      if (string.indexOf(string[i]) !== i) {
        string = string.substr(0, i) + string.substr(i+1);
      }
    }

    return string;
}
