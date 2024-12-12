function insertionSort(num) {
  for (let i = 1; i < num.length; i++) {
    let key = num[i];
    let j = i - 1;
    while (j >= 0 && num[j] > key) {
      num[j + 1] = num[j];
      j--;
    }
    num[j + 1] = key;
  }
  return num;
}

console.log(insertionSort([2, 6, 5, 7, 0, 4]));
