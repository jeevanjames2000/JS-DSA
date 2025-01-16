const searchTerms = ["ininnerChild"];
let data = [
  { title: "hello", name: "jeevan" },
  { title: "hey", name: "jeevan1" },
  {
    title: "non",
    name: "ntng",
    child: [
      {
        title: "hellochild",
        name: "inner child",
        insideChild: [{ title: "ininnerChild", name: "ininnerrchild" }],
      },
    ],
  },
  { title: "hii", name: "jeevan2" },
];

//
//

function flattenData(data) {
  let result = [];
  for (let item of data) {
    result.push(item);
    if (item.child) {
      result = result.concat(flattenData(item.child));
    }
    if (item.insideChild) {
      result = result.concat(flattenData(item.insideChild));
    }
  }
  console.log(...result);
  return result;
}

let flattenedData = flattenData(data);
let res = flattenedData.filter((item) =>
  searchTerms.some(
    (term) =>
      (item.title && item.title.toLowerCase().includes(term.toLowerCase())) ||
      (item.name && item.name.toLowerCase().includes(term.toLowerCase()))
  )
);
console.log("result", ...res);
