var LinkedList = require('./linked-list');

LinkedList.prototype.add = function (list) {
  var digits = this.getArray();
  var digits2 = list.getArray();
  var remainder = false;
  var output = [];
  var index = 0;

  while(index < digits.length || index < digits2.length) {
    var sum = 0;
    if (remainder) {
      sum += 1;
      remainder = false;
    }

    if (index < digits.length) {
      sum += digits[index];
    }

    if (index < digits2.length) {
      sum += digits2[index];
    }

    if (sum > 9) {
      remainder = true;
      sum -= 10;
    }

    index++;
    output.push(sum);
  }

  var output = output.reverse();
  var outputList = new LinkedList();

  for (var i = 0; i < output.length; i++) {
    outputList.push(output[i]);
  }

  return outputList;
};

LinkedList.prototype.getArray = function() {
  var digits = [];
  if (!this.head) return digits;

  var current = this.head;
  while(current) {
    digits.push(current.value);
    current = current.next;
  }

  return digits;
};
