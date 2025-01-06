function reverse(n) {
  let bit = Math.pow(2, 31) - 1; // Number should be between 32 bit integer only
  let rev = n.toString().split("").reverse().join("");
  let res = parseInt(rev);
  if (res > bit || res < -bit) {
    return 0;
  }
  if (n < 0) {
    return -res;
  } else {
    return res;
  }
}
console.log(reverse(-321));
