function truncateString(str, num) {
  // Clear out that junk in your trunk
  var ret_string = "";
  
  switch (num) {
    case 0:
    case 1:
    case 2:
    case 3:
      ret_string = str.slice(0, num) + "...";
      break;
    default:
      if (str.length > num) {
        ret_string = str.slice(0, num-3) + "...";
      } else {
        ret_string = str.slice(0, num);
      }
  }

  return ret_string;
}

truncateString("A longer string", 5);
