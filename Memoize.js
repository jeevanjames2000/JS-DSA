function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("cache value");
      return cache.get(key);
    }
    console.log("new call");
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
function add(a, b) {
  return a + b;
}

const memo = memoize(add);
console.log(memo(2, 2));
console.log(memo(2, 2));
console.log(memo(2, 2));
console.log(memo(2, 3));
console.log(memo(2, 3));
console.log(memo(2, 3));

