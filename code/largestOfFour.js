function largestOfFour(arr) {
  // You can do this!
  var largest = 0;
  var arr_out = [];
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      var comp = arr[i][j];
      if (comp > largest) {
        largest = comp;
        arr_out[i] = comp;
      }
    }
    largest = 0;
  }
  return arr_out;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [25,86,89,98]]);
