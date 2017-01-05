var expect = require('chai').expect;
var strings = require('../../src/arrays-strings/8-substring.js');

describe('8. Check if a string is a substring of another', function() {
  it('should be the same length', function() {
    var string1 = 'hello';
    var string2 = 'what';

    var isSubstring = strings.isSubstring(string1, string2);
    expect(isSubstring).to.equal(false);
  });

  it('should return true if a string is a rotation of the other', function() {
    var string1 = 'waterbottle';
    var string2 = 'erbottlewat';

    var isSubstring = strings.isSubstring(string1, string2);
    expect(isSubstring).to.equal(true);
  });
});
