exports.replaceWhitespaces = replaceWhitespaces;

function replaceWhitespaces(string) {
  return string.replace(/\s+/g, '%20');
}
