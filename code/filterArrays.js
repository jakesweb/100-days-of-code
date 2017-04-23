function filterArgs (arr) {
  return function arrIsnt(element) {
    return arr.indexOf(element) === -1;
  };
}
  

function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments, 1);
  
  var ret_arr = arr.filter(filterArgs(args));
  
  return ret_arr;
}