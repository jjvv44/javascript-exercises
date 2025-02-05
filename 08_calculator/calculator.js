const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
  let res = 0
	for (i=0; i<a.length; i++) {

    res += a[i];
  }
  return res;
};

const multiply = function(a) {
  let res = 0
	for (i=0; i<a.length; i++) {
    if (i > 0) {
    res = res * a[i] }
    else res = a[0];
  }
  return res;
};

const power = function(a,b) {
  let result = a;
  for (i=1; i<b; i++) {
    result = result * a;
  }
	return result;
};

const factorial = function(a) {
	if (a === 0) {
    result = 1;
  } else {
    result = a;
  };

  for (i=1; i<a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
