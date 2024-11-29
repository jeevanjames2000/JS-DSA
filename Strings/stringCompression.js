// ["a", "a", "b", "c", "d", "d"]
// String compression means when you get 2 or more string with same values then we will
// just store its single value and its count of occurances like [a2,b,c,d2] like this

function sf(s) {
  let count = 1;
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      result.push(count > 1 ? `${s[i]}${count}` : s[i]);
      count = 1;
    }
  }
  return result;
}
const s = ["a", "a", "b", "c", "d", "d"];
console.log(sf(s));

