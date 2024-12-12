function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

function bubbleSort1(arr) {
  let swapped = true;
  let res
  let arr1
  while (swapped) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let j=0;j<arr1.length;j++){

        }
      if (arr[i] > arr[i + 1]) {
       count++
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 4, 2, 6, 7, 9, 1]));
