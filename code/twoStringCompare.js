function mutation(arr) {
  
  var first_string = arr[0].split().toString().toLowerCase();
  var sec_string = arr[1].split().toString().toLowerCase();
  
  for (var i=0; i < sec_string.length; i++) {
    if (first_string.indexOf(sec_string[i]) === -1) {
      return false;
    }
  }
    
  return true;
}

mutation(["hello", "hey"]);