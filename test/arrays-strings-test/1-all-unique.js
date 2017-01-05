var expect = require('chai').expect;
var strings = require('../../src/arrays-strings/1-all-unique.js');

describe("1. All unique characters", function() {
  it('should be true if characters are not repeated', function() {
    var areUnique = strings.allCharactersAreUnique('QWERTYUIOP');
    expect(areUnique).to.equal(true);
  });

  it('should be false if characters are repeated', function() {
    var areUnique = strings.allCharactersAreUnique('AASSDD');
    expect(areUnique).to.equal(false);
  })
});
