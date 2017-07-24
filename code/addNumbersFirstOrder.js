// thanks to 
// https://stackoverflow.com/questions/29822008/js-function-with-two-parentheses-and-two-params
function addTogether(a,b) {
  if (arguments.length === 1) {
    if (typeof a === 'number') {
      return function(n) {
        if (typeof n === 'number') {
          return a + n;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  } else if (arguments.length === 2) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return undefined;
    }
  }
  return undefined;
}

//addTogether(2, "3");
addTogether(2)([3])