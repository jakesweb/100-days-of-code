function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i=0; i<arr1.length; i++) {
    var index = arr2.indexOf(arr1[i]);
    if (index == -1) {
      newArr.push(arr1[i]);
    }
  }
  for (i=0; i<arr2.length; i++) {
    var index = arr1.indexOf(arr2[i]);
    if (index == -1) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);