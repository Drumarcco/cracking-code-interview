var expect = require('chai').expect;
var LinkedList = require('../../src/linked-lists/linked-list');
require('../../src/linked-lists/4-add-reverse');

describe('4. Add two numbers represented by linked lists in reverse order', function() {
  it('should add two lists', function() {
    var list = new LinkedList();
    list.push(3);
    list.push(1);
    list.push(5);

    var list2 = new LinkedList();
    list2.push(5);
    list2.push(9);
    list2.push(2);

    var expectedResult = new LinkedList();
    expectedResult.push(8);
    expectedResult.push(0);
    expectedResult.push(8);

    var sum = list.add(list2);
    expect(sum).to.deep.equal(expectedResult);
  });

  it('should transform a LinkedList to an array', function() {
    var list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);

    var array = list.getArray();
    expect(array).to.deep.equal([1, 2, 3]);
  });
});
