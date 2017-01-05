var expect = require('chai').expect;
var strings = require('../../src/arrays-strings/5-replace-spaces');

describe('5. Replace white spaces with %20', function() {
  it('should replace white spaces with %20', function() {
      var encodedString = strings.replaceWhitespaces('Hello world!');
      expect(encodedString).to.equal('Hello%20world!');
  });

  it('should replace consecutive white spaces with only one %20', function() {
    var encodedString = strings.replaceWhitespaces('Hello   world!');
    expect(encodedString).to.equal('Hello%20world!');
  });
});
