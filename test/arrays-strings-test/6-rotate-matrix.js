var expect = require('chai').expect;
var arrays = require('../../src/arrays-strings/6-rotate-matrix');

describe('6. Given a NxN matrix, rotate the image by 90 degrees', function() {
  it('should rotate a 2x2 matrix', function() {
    var matrix = [
      [1, 2],
      [3, 4]
    ];

    var rotatedMatrix = [
      [3, 1],
      [4, 2]
    ];

    var matrix = arrays.rotate(matrix);
    expect(matrix).to.deep.equal(rotatedMatrix);
  });

  it('should rotate a 3x3 matrix', function() {
    var matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    var rotatedMatrix = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];

    var matrix = arrays.rotate(matrix);
    expect(matrix).to.deep.equal(rotatedMatrix);
  });
});
