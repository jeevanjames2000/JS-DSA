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

//
//
//
// using normal array stack

function generateFlat(arr) {
  let newArr = [];
  for (let item in arr) {
    if (Array.isArray(arr[item])) {
      newArr = newArr.concat(generateFlat(arr[item]));
    } else {
      newArr.push(arr[item]);
    }
  }
  return newArr;
}
const data = [1, [2, [3], [4]]];
const resullt = generateFlat(data);
console.log(resullt);
