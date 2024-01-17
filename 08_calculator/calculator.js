const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
};

const multiply = function(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((product, n) => product * n, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let ans = 1;
  for (let i = 0; a - i > 0; i++) {
    ans *= a - i;
  }
  return ans;
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
