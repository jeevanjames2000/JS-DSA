function capitilize(str) {
  const words = str.split(" ");
  let res = [];
  for (let word of words) {
    res.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log("first response", res.join(" "));
  return words.map((word) => word[0].toUpperCase() + word.slice(1));
}
console.log(capitilize("jeevan is a good boy"));
