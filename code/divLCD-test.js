function smallestCommons(arr) {  
  var min, max, lcd;
  var tab = 0;
  var tabArr = [];
  var check = true;
  var iter = 1;
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
  
  while (check) {
    tab = 0;
    lcd = max * iter;
    if (lcd % min === 0) {
      for (var i=min; i<max; i++) {
        tab = tab + (lcd % i);
      }
      if (tab === 0) {
        check = false;
        return lcd;
      } else {
        iter++;
      }
    } else {
      iter++;
    }
  }
  
  return lcdArr;
}


smallestCommons([1,5]);