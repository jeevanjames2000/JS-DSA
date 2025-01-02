// Leetcode Q:41 Hard

function FindFirstMissingPositveInteger(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[nums[i] - 1]) {
      let temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    } else {
      i++;
    }
  }

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] != k + 1) {
      return k + 1;
    }
  }
  return nums.length + 1;
}
console.log(FindFirstMissingPositveInteger([1, 3, 4, 2, 6]));
