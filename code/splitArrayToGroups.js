function chunkArrayInGroups(arr, size) {
  // Break it up.
  var ret_array = [];
  var arr_slice = [];
  var index_count = 0;
  
  for (var i = 0; i < arr.length/size; i++) {
    arr_slice = arr.slice(index_count, index_count + size);
    ret_array.push(arr_slice);
    index_count += size;
  }
  
  return ret_array;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);