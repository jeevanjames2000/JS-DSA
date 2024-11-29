const pipe = (fns) => (x) => fns.reduce((acc, fn) => fn(acc), x); //main pipe function

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const twice = pipe([times(2)]);
const increment = pipe([plus(1)]);
const multiplyAndAdd = pipe([times(2), plus(3)]);
const subtractAndDivide = pipe([subtract(3), divide(4)]);

console.log(twice(3));
console.log(increment(3));
console.log(multiplyAndAdd(3));
console.log(subtractAndDivide(3));
