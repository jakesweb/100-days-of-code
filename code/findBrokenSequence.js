function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  for (var i=0; i<str.length; i++) {
    if (str.charCodeAt(i) != start) {
      return String.fromCharCode(start);
    }
    start++;
  }
  return undefined;
}

fearNotLetter("abce");