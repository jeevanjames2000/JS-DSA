function merge(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return mergeSort(merge(left), merge(right));
}

//first we will split the arrays into 2 parts left and right and then we will call the main mergeSort function

function mergeSort(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  res.push(...left.slice(i));
  res.push(...right.slice(j));
  return res;
}

console.log(merge([26, 34, 54, 3, 4, 23, 25]));
