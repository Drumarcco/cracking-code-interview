var expect = require('chai').expect;
var LinkedList = require('../../src/linked-lists/linked-list');
require('../../src/linked-lists/2-find');

describe('2. Find nth to last element of a singly linked list', function() {
  it('should return the node in the nth position', function() {
    var list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);

    var partialList = new LinkedList();
    partialList.push(2);
    partialList.push(3);

    var list = list.findNth(1);
    expect(list).to.deep.equal(partialList);
  });

  it('should return null if list is empty', function() {
    var list = new LinkedList();

    var list = list.findNth(3);
    expect(list).to.equal(null);
  });

  it('should return null if index is greater than count', function() {
    var list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);

    var list = list.findNth(3);
    expect(list).to.equal(null);
  });
});
