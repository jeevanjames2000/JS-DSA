// Google SDE Question
// 767. Reorganize String
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
// Return any possible rearrangement of s or return "" if not possible.

function reorganizeString(s) {
  const hash = {};
  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }
  const lettersByDecCount = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  const output = new Array(s.length);
  let index = 0;
  for (let i = 0; i < lettersByDecCount.length; i++) {
    const letter = lettersByDecCount[i];
    const letterCount = hash[letter];
    if (letterCount > Math.floor((s.length + 1) / 2)) {
      return ""; //return if impossible to reorganize
    }
    for (let j = 0; j < letterCount; j++) {
      if (index >= s.length) {
        index = 1;
      }
      output[index] = letter;
      index += 2;
    }
  }
  return output.join("");
}
console.log(reorganizeString("ababbab"));
