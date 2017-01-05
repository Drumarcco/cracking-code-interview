var expect = require('chai').expect;
var strings = require('../../src/arrays-strings/2-reverse');

describe('2. Reverse string', function() {
  it('should return a reversed string', function() {
    var reverse = strings.reverse('ABCD');
    expect(reverse).to.equal('DCBA');
  });
});
