var expect = require('chai').expect;
var LinkedList = require('../../src/linked-lists/linked-list');

describe('Linked Lists', function() {
  var list;

  beforeEach(function() {
    list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
  });

  it('should add elements', function() {
    expect(list.count()).to.equal(4);
  });

  describe('contains', function() {
    it('should return true if contains element', function() {
      expect(list.contains(3)).to.equal(true);
    })

    it('should return false if it does not contain element', function() {
      expect(list.contains(5)).to.equal(false);
    })
  });

  describe('remove elements', function() {
    describe('by value', function() {
      it('should remove an element on the head', function() {
        list.remove(1);
        expect(list.count()).to.equal(3);
        expect(list.contains(1)).to.equal(false);
      });

      it('should remove an element on the middle', function() {
        list.remove(2);
        expect(list.count()).to.equal(3);
        expect(list.contains(2)).to.equal(false);
      });

      it('should remove an element on the tail', function() {
        list.remove(4);
        expect(list.count()).to.equal(3);
        expect(list.contains(4)).to.equal(false);
      })
    });
  });
});
