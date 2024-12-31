// 2053. Kth Distinct String in an Array
// Easy
// Topics
// Companies
// Hint
// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

// Example 1:

// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const help = new Map();
  for (let str of arr) help.set(str, (help.get(str) ?? 0) + 1);

  for (let str of arr) {
    if (help.get(str) == 1) {
      --k;
      if (k == 0) return str;
    }
  }
  return "";
};

console.log(kthDistinct(["b", "d", "b", "c", "c", "a"], 2));
