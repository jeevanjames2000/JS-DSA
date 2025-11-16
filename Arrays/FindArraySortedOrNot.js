// optimized approadch to check if an array is sorted in non-decreasing order

function sortedORNot(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const arr = [5, 3, 1, 2];
console.log(sortedORNot(arr));
