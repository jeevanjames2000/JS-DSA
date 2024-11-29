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
