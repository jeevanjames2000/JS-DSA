function selectionSort(num) {
  for (let j = 0; j < num.length; j++) {
    let min = j;
    for (let i = j + 1; i < num.length; i++) {
      if (num[i] < num[min]) {
        min = i;
      }
    }
    if (j !== min) {
      let temp = num[j];
      num[j] = num[min];
      num[min] = temp;
    }
  }
  return num;
}

console.log(selectionSort([2, 6, 5, 7, 0, 4]));
