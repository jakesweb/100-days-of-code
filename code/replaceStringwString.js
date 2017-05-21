function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (str[index] == str[index].toUpperCase()) {
    return str.replace(before, [after.slice(0,1).toUpperCase(), after.slice(1)].join(''));
  } else {
    return str.replace(before, after);
  }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");