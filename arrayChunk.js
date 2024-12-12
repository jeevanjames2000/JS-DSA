function chunk(arr, size) {
  let index = 0;
  let res = [];
  while (index < arr.length) {
    res.push(arr.slice(index, index + size));
    index += size;
  }
  return res;
}
console.log(chunk([1, 2, 3, 4], 2));
