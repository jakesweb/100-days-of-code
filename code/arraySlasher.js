function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var ret_array = [];
  var arr_slice = [];
  var index_count = 0;
  
  if (arr.length < howMany) {
    return ret_array;
  } 
  if (howMany === 0) {
    return arr;
  }
  
  ret_array = arr.splice(-(arr.length-howMany));
  
  return ret_array;
}

slasher([1,2,3], 1);