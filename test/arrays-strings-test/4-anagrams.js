var expect = require('chai').expect;
var strings = require('../../src/arrays-strings/4-anagrams');

describe('4. Decide if two strings are anagrams or not', function() {
  it('should return true for a string that reads equally backwards', function() {
    var isAnagram = strings.isAnagram('Anita lava la tina');
    expect(isAnagram).to.equal(true);
  });

  it('should return false for a string that doesn\'t reads equally backwards', function() {
    var isAnagram = strings.isAnagram('This is not an anagram');
    expect(isAnagram).to.equal(false);
  });
});
