var expect = require('chai').expect;
var LinkedList = require('../../src/linked-lists/linked-list');

describe('3. Delete a node in the middle of a single linked list', function() {
  it('should remove a node in the middle', function() {
    var list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);

    list.remove(2);
    expect(list.count()).to.equal(2);
    expect(list.count(2)).to.equal(0);
  });
});
