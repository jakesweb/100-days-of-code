function pairElement(str) {
  str = str.split('');
  var retArr = [];  
  for (var i=0; i<str.length; i++) {
    switch (str[i]) {
      case 'A':
        retArr.push(['A', 'T']);
        break;
      case 'T':
        retArr.push(['T', 'A']);
        break;
      case 'C':
        retArr.push(['C', 'G']);
        break;
      case 'G':
        retArr.push(['G', 'C']);
        break;
      default:
        console.log("Invalid Base");
    }
  }
  
  return retArr;
}

pairElement("GCG");