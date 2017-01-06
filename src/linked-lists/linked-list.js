module.exports = LinkedList;

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(val) {
  var node = {
    value: val,
    next: null
  }

  if(!this.head) {
    this.head = node;
  } else {
    var current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }
}

LinkedList.prototype.remove = function(val) {
  var current = this.head;

  if (current.value == val) {
    this.head = current.next;
  } else {
    var previous = current;

    while (current.next) {
      if (current.value == val) {
        previous.next = current.next;
      }
      previous = current;
      current = current.next;
    }

    if(current.value == val) {
      previous.next = null;
    }
  }
}

LinkedList.prototype.count = function (value) {
  if(!this.head) return 0;

  var count = 0;
  var current = this.head;

  while (current) {
    if (value) {
      if (value === current.value) {
        count++;
      }
    } else {
      count++;
    }
    current = current.next;
  }

  return count;
};

LinkedList.prototype.contains = function (val) {
  if(!this.head) return false;

  var current = this.head;
  while(current.next) {
    if (current.value == val) return true;
    current = current.next;
  }

  return false;
};
