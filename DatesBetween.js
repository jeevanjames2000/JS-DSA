const start = new Date("2024-11-20");
const end = new Date();

function generate(start, end) {
  let dates = [];
  let current = new Date(start);
  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}
const res = generate(start, end);
const format = res.map((item) => item.toISOString().split("T")[0]);
console.log(format);
