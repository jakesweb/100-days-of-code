
n whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (var i=0; i<collection.length; i++) {
    var o = Object.assign({}, collection[i]);
    var key = Object.keys(source);
    var firstArr = [];
    var secArr = [];
    for (var j=0; j<key.length; j++) {
      firstArr.push(o[key[j]]);
      secArr.push(source[key[j]]);
    }
    if (firstArr.join('') == secArr.join('')) {
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
