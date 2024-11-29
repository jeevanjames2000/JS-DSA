// reverse code for compression we used regex expression for finding alphabet and number count
// based on the number count we looped the letters * count

function decompress(compressed) {
  let result = [];
  for (let i = 0; i < compressed.length; i++) {
    let char = compressed[i];
    let match = char.match(/^([a-zA-Z])(\d+)?$/);
    console.log("match: ", match);
    if (match) {
      let letter = match[1];
      let count = parseInt(match[2] || 1);
      console.log("count: ", count);
      for (let j = 0; j < count; j++) {
        result.push(letter);
      }
    }
  }
  return result;
}
const compressed = ["a2", "b", "c", "d2"];
console.log(decompress(compressed));
