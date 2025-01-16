// function _Anagram(words) {
//   let splited = words.map((word) => word.toString().split("").sort());
//   console.log(splited[0].join("") == splited[1].join(""));
// }

function Anagram(words) {
  if (words[0].length !== words[1].length) {
    return false;
  }
  let map = {};
  for (let word of words[0]) {
    map[word] = (map[word] || 0) + 1;
  }
  for (let char of words[1]) {
    if (!map[char]) {
      return false;
    }
    map[char] -= 1;
  }
  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(Anagram(["listen", "silent"]));
