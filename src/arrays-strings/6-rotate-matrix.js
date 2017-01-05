exports.rotate = rotate;

function rotate(array) {
  var stack = [];
  var rotatedArray = [];

  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      stack.push(array[j][i]);
    }

    var row = [];

    while(stack.length) {
      row.push(stack.pop());
    };

    rotatedArray.push(row);
  }

  return rotatedArray;
}
