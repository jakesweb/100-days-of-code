function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var arr_ind = 0;
  var new_arr = [];
  
  if (arr.indexOf(num) === -1) {
    arr.push(num);
    new_array = arr.sort(function(a,b) {
      return a - b;
    });
    arr_ind = new_array.indexOf(num);
  } else {
    arr.sort(function (a,b) {
      return a - b;
    });
    arr_ind = arr.indexOf(num);
  }
  
  return arr_ind;
}

getIndexToIns([5, 3, 20, 3], 5);
