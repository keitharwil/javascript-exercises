const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((a, b) => a + b, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((a, b) => a * b);
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  const numbers = new Array();
  for (let i = num; i >= 1; i--) {
    numbers.push(i);
  }
  return num === 0 ?  1 : numbers.reduce((a, b) => a * b);
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
