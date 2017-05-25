function translatePigLatin(str) {
  var index = str.indexOf(str.match(/[aeiou]/i));
  if (index === 0) {
    str = str + "way";
  } else {
    str = str.substr(index) + str.substr(0, index) + "ay"; 
  }
  return str;
}

translatePigLatin("consonant");