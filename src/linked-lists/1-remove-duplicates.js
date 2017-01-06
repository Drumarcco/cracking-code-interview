var LinkedList = require('./linked-list');

LinkedList.prototype.removeDuplicates = function () {
  if (!this.head) return null;
  var current = this.head;
  while(this.count(current.value) > 1) {
    this.remove(current.value);
  }
};
