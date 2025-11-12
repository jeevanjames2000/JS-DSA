// 167. Two Sum II - Input Array Is Sorted

function twoSum(numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

const n = [2, 7, 11, 19];
console.log(twoSum(n, 18));

// | Step | left | right | numbers[left] | numbers[right] | sum | Action             |
// | ---- | ---- | ----- | ------------- | -------------- | --- | ------------------ |
// | 1    | 0    | 3     | 2             | 19             | 21  | sum > 18 → right-- |
// | 2    | 0    | 2     | 2             | 11             | 13  | sum < 18 → left++  |
// | 3    | 1    | 2     | 7             | 11             | 18  | ✅ Found it!        |
