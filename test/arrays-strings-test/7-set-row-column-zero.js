var expect = require('chai').expect;
var arrays = require('../../src/arrays-strings/7-set-row-column-zero');

describe('7. If an element on a MxN matrix is zero, set its row and column to zero', function() {
  it('should set rows and columns to zero', function() {
    var array = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11]
    ];

    var zeroedArray = [
      [0, 0 ,0],
      [0, 4, 5],
      [0, 7, 8],
      [0, 10, 11]
    ];

    var array = arrays.zeroRowAndColumn(array);
    expect(array).to.deep.equal(array, zeroedArray);
  });

  it('should set a NxN matrix rows and columns to zero', function() {
    var array = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9]
    ];

    var zeroedArray = [
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9]
    ];

    var array = arrays.zeroRowAndColumn(array);
    expect(array).to.deep.equal(array, zeroedArray);
  });
});
