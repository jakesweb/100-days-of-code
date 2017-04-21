function palindrome(str) {

  var arr_reverse = [];
  
  var new_str = str.replace(/[^a-zA-Z1-9]/g, "");
  
  var str_compare = new_str.toLowerCase();
  
  for (var i = 0; i < str_compare.length; i++) {
    arr_reverse[i] = str_compare[i];
  }
  
  arr_reverse.reverse();
  var str_reverse = arr_reverse.join("");
  
  if (str_reverse === str_compare) {
    return true;
  } else {
    return false;
  }
}



palindrome("1 eye for of 1 eye.");