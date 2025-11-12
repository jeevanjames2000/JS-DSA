// arr = [0,0,1,3,12,0]
// we need to move all the zeroes to right side of array and move values greater than 0 to left
// first we have interated the nums[i] > 0
// if greater than 0 push t0 left || if lessthan 0 move to right
// return left

var moveZeroes = function (nums) {
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  console.log(left, right);
  return left.concat(right);
};
console.log(moveZeroes([0, 0, 1, 3, 12, 0]));

function Move(n) {
  let nonZeroIndex = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== 0) {
      // if move zeroes to starting change !== to ===
      [n[nonZeroIndex], n[i]] = [n[i], n[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return n;
}

console.log(Move([0, 1, 2, 0, 3, 4, 0]));

// | Step | i | nums[i] | Action    | Array State     | lastNonZero |
// | ---- | - | ------- | --------- | --------------- | ----------- |
// | 0    | - | -       | Initial   | [0,1,2,0,3,4,0] | 0           |
// | 1    | 1 | 1       | Swap(1,0) | [1,0,2,0,3,4,0] | 1           |
// | 2    | 2 | 2       | Swap(2,1) | [1,2,0,0,3,4,0] | 2           |
// | 3    | 3 | 0       | Skip      | [1,2,0,0,3,4,0] | 2           |
// | 4    | 4 | 3       | Swap(4,2) | [1,2,3,0,0,4,0] | 3           |
// | 5    | 5 | 4       | Swap(5,3) | [1,2,3,4,0,0,0] | 4           |
// | 6    | 6 | 0       | Skip      | [1,2,3,4,0,0,0] | 4           |
