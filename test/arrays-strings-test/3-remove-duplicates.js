var expect = require('chai').expect;
var strings = require('../../src/arrays-strings/3-remove-duplicates');

describe('3. Remove duplicate characters in a string without using any additional buffer', function() {
  it('should remove duplicate characters', function() {
    var stringWithoutDuplicates = strings.removeDuplicates('AABBCC');
    expect(stringWithoutDuplicates).to.equal('ABC');
  });
});
