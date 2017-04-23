function remFalsy (value) {
  if (value) {
    return true;
  } else {
    return false;
  }
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var ret_arr = arr.filter(remFalsy);
  
  return ret_arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);