function secondSmallestAndSecondLargest(arr) {
  arr.sort((a, b) => a - b);
  const smallest = arr[1];
  const largest = arr[arr.length - 2];
  return { secondSmallest: smallest, secondLargest: largest };
}
const arr = [3, 5, 1, 8, 2, 7];
console.log(secondSmallestAndSecondLargest(arr));
