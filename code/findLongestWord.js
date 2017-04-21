
function findLongestWord(str) {
  var max_length = 0;
  var ret_str= "";
  
  var arr_out = str.split(" ");
  
  for (var i = 0; i < arr_out.length; i++)  {
    if (arr_out[i].length > max_length) {
      max_length = arr_out[i].length;
      ret_str = arr_out[i];
    }
  }
  
  return max_length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");