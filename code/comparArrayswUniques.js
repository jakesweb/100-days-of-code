function uniteUnique(arr) {
  var wrkArr = [];
  var retArr = [];
  for (var i=0; i<arguments.length; i++) {
    wrkArr = wrkArr.concat(arguments[i]);
  }
  for (i=0; i<wrkArr.length; i++) {
    if (retArr.indexOf(wrkArr[i]) == -1) {
      retArr.push(wrkArr[i]);
    }
  }
  return retArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);