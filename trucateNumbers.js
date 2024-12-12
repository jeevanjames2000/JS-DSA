// using regex patterns
function truncateNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return num.toString();
  }
}

console.log(truncateNumber(14402302));
console.log(truncateNumber(1000));
console.log(truncateNumber(1000000));
console.log(truncateNumber(950));

// using if else
function truncateNumber(num) {
  if (num >= 1_000_000) {
    let result = (num / 1_000_000).toFixed(1);
    if (result.endsWith(".0")) {
      result = result.slice(0, -2);
    }
    return result + "M";
  } else if (num >= 1_000) {
    let result = (num / 1_000).toFixed(1);
    if (result.endsWith(".0")) {
      result = result.slice(0, -2);
    }
    return result + "k";
  } else {
    return num.toString();
  }
}
console.log(truncateNumber(15532302));
console.log(truncateNumber(1000));
console.log(truncateNumber(1000000));
console.log(truncateNumber(10000000));
console.log(truncateNumber(950));
