// Brute force approach to find the largest element in an array by sorting it.
function sortArr(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
const arr1 = [3, 5, 7, 2, 8];
console.log(sortArr(arr1));

// recursive approach to find the largest element in an array.

function recursiveLargest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(recursiveLargest([3, 5, 7, 2, 8]));
