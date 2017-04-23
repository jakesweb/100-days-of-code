function rot13(str) { // LBH QVQ VG!
  var cont_arr = 0;
  var new_str = "";
  
  for (var i=0; i < str.length; i++) {
    cont_arr = str.charCodeAt(i);
    
    if (cont_arr < 65) {
      new_str += String.fromCharCode(cont_arr);
    } else if (cont_arr >= 65 && cont_arr <= 77) {
      new_str += String.fromCharCode((cont_arr - 65) + 90 - 12);
    } else {
      new_str += String.fromCharCode(cont_arr - 13);
    }   
  }
  
  return new_str;
}