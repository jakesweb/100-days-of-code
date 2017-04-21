function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var compare_string = str.substring(str.length-target.length);
  
  if (compare_string == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "an");