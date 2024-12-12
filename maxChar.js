function maxChar(str) {
  let data = new Map();
  let maxCount = 0;
  let maxChar = null;
  for (const char of str) {
    const count = (data.get(char) || 0) + 1;
    console.log("char, count: ", char, count);
    data.set(char, count);
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxChar("abcdddderrrrrrrddd"));

// store the char in data = new Map()
// then loop through str
// let key = data.get(char)  get the key and its value
// set the key and value
// if key count is greater than the current max count
// then set the maxCount as count
// max char as char
