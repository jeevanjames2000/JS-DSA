// need to find min value in each iteration and multiply with the multiplier and return the result

function getMinValMultiply(nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let index = nums.indexOf(Math.min(...nums));
    nums[index] *= multiplier;
  }
  return nums;
}
console.log(getMinValMultiply([2, 1, 3, 4, 5], 5, 2));

// first iteration  [2,1,3,4,5]  min num is 1 // multiply 1 with 2 (1*2)=> 2
// second iteration [2,2,3,4,5] min num is 2 // multiply 2 with 2 (2*2)=> 4
// third iteration [4,2,3,4,5] min num is 2 // multiply 2 with 2 (2*2)=> 4
// fourth iteration [4,4,3,4,5] min num is 3 // multiply 3 with 2 (3*2) => 6
// fifth iteration [4,4,6,4,5] min num is 4 // multiply 4 with 2 (4*2)=> 8
// [8,4,6,4,5]
