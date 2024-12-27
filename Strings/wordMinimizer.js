// first approach
function wordMin(word = "fuxxweeewwwweedfdfq") {
  if (word.length <= 10) {
    return word;
  }
  let min = [];
  let count = [];
  let end = [];
  for (let i = 1; i < word.length - 1; i++) {
    count.push(word[i]);
  }
  end.push(word[word.length - 1]);
  min.push(word[0]);
  return `${min}${count.length}${end}`;
}

console.log(wordMin());

//second approach

function wordMin1(word = "fuxxweeewwwweedfdfq") {
  const firstchar = word[0];
  const lastchar = word[word.length - 1];
  const middle = word.length - 2;
  if (word.length <= 10) {
    return word;
  }

  return `${firstchar}${middle}${lastchar}`;
}

console.log("2nd", wordMin1());
