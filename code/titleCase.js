function titleCase(str) {
  str = str.toLowerCase();
  var arr_out = str.split(" ");
  
  for (var i = 0; i < arr_out.length; i++) {
    var split_case = arr_out[i].split("");
    split_case[0] = split_case[0].toUpperCase();
    split_case = split_case.join("");
    arr_out[i] = split_case;
  }
  
  var ret_str = arr_out.join(" ");
  
  return ret_str;
}

titleCase("I'm a little tea pot");
