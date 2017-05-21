
n convertToRoman(num) {
  var romanArray = [];
  while (num >= 1000) {
    romanArray.push("M");
    num -= 1000;
  }
  while (num >= 500) {
    romanArray.push("D");
    num -= 500;
  }
  while (num >= 100) {
    romanArray.push("C");
    num -= 100;
  }
  while (num >= 50) {
    romanArray.push("L");
    num -= 50;
  }
  while (num >= 10) {
    romanArray.push("X");
    num -= 10;
  }
  while (num >= 5) {
    romanArray.push("V");
    num -= 5;
  }
  while (num >= 1) {
    romanArray.push("I");
    num -= 1;
  }
  
  var numerals = romanArray.join('');
  numerals = numerals.replace(/VIIII/gi, "IX");
  numerals = numerals.replace(/IIII/gi, "IV");
  numerals = numerals.replace(/LXXXX/gi, "XC");
  numerals = numerals.replace(/XXXX/gi, "XL");
  numerals = numerals.replace(/DCCCC/gi, "CM");
  
  return numerals;
}

convertToRoman(3999);
