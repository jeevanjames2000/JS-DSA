var inorderTraversal = function* (arr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      yield* inorderTraversal(item);
    } else {
      yield item;
    }
  }
};

const gen = inorderTraversal([1, [2, 3]]);
const res = [...gen];
gen.next().value;
console.log(res);
