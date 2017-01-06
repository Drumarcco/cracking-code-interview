var expect = require('chai').expect;
var LinkedList = require('../../src/linked-lists/linked-list');
require('../../src/linked-lists/1-remove-duplicates');

describe('1. Remove duplicates from an unsorted linked list', function() {
  it('should remove duplicates', function() {
    var list = new LinkedList();

    list.push(1);
    list.push(2);
    list.push(1);

    list.removeDuplicates();
    expect(list.count()).to.equal(2);
    expect(list.count(1)).to.equal(1);
  });
});
