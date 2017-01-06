var LinkedList = require('./linked-list');

LinkedList.prototype.findNth = function (index) {
  if(!this.head || index > this.count() - 1) return null;

  var current = this.head;
  for(var i = 0; i < index; i++) {
    current = current.next;
  }

  var partialList = {
    head: current
  };

  Object.setPrototypeOf(partialList, this);

  return partialList;
};
