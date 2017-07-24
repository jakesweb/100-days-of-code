function steamrollArray(arr) {
  // I'm a steamroller, baby
  var retarr = [];
  var elearr = [];
  for (var i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      elearr.push(arr[i]);
    } else {
      retarr.push(arr[i]);
    }
  }
  var ret = elearr.join('').replace(/,/g, '');
  for (var j=0; j<ret.length; j++) {
    if (/[a-zA-Z]/.test(ret[j])) {
     retarr.push(ret[j]);
    } else {
     retarr.push(parseInt(ret[j])); 
    }
  }
  
  return retarr;
}

//steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);