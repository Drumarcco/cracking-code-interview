exports.zeroRowAndColumn = zeroRowAndColumn;

function zeroRowAndColumn(array) {
  var zeroRows = [];
  var zeroColumns = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        if (zeroRows.indexOf(i) != -1) {
          zeroRows.push(i);
        }

        if (zeroColumns.indexOf(j) != -1) {
          zeroColumns.push(j);
        }
      }
    }
  }

  while(zeroRows.length) {
    var rowToZero = zeroRows.pop();
    array = zeroRow(array, rowToZero);
  }

  while(zeroColumns.length) {
    var columnToZero = zeroColumns.pop();
    array = zeroColumn(array, columnToZero);
  }

  return array;
}

function zeroRow(array, rowToZero) {
  for (var j = 0; j < array[rowToZero].length; j++) {
    array[rowToZero][j] = 0;
  }

  return array;
}

function zeroColumn(array, columnToZero) {
  for (var i = 0; i < array.length; i++) {
    array[i][columnToZero] = 0;
  }

  return array;
}
