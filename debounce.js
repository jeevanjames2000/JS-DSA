function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function add(a, b) {
  console.log(a + b);
}

const debounced = debounce(add, 100);
debounced(2, 2);
