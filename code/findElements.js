function findElement(arr, func) {
  var ret = arguments[0].filter(arguments[1]);
  return ret[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });