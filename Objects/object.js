// obj creating
// 1. using new constructor function
const obj = new Object("hello");
const obj2 = Object("hello"); // Object inbuilt keyword
const obj3 = {
  name: "hello",
}; // key value pairs

// Object.assign()
const a = { a: 1, b: 2 };
const b = { b: 3, d: 4 };
const c = Object.assign(a, b); // Properties in the a object are overwritten by properties in the b if they have the same key

// Object.create()
const person = {
  isHuman: false,
  print: function () {
    return console.log("my name is", this.name);
  },
};

const me = Object.create(person); // same like new keyword ,creates new  object using existing object
me.name = "jeevan";
me.print();

// Object.entries()
const objent = { a: 1, b: 2 };
const entries = Object.entries(objent); // gives the array of keys values of the object data returns 2 arrays [["a","1"],["b","2"]]
for (let [key, value] of entries) {
  console.log(`${key}${value}`);
}

// Object.fromentries
const from = new Map([
  ["a", "1"],
  ["b", "2"],
]);
const froment = Object.fromEntries(from); // re structure the object.entries into its previous state like an object
//with key value pairs combine 2 arrays to old position

console.log("froment: ", froment);

// Object.freeze()
const freeze = { a: 1, b: 2 };
Object.freeze(freeze); // this will make object immutable cannot be modified while running the program and cannot add and remove
freeze.b = 3;
delete freeze.b;
freeze.c = 4;
console.log("freeze: ", freeze);

// Object.seal()
const seal = { a: 1, b: 2 };
Object.seal(seal); // object is sealed but can be modified the values but new values cannot be added and deleted
seal.b = 3;
seal.c = 4;
delete seal.b;

console.log("seal: ", seal);

// Object.groupBy()
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const groupBy = inventory.reduce((acc, item) => {
  const key = item.type; // Grouping by `type`
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});

console.log("groupBy: ", groupBy);

// Object.isExtensible()

const ext = { a: 1, b: 2 };
// Object.isExtensible(ext);
Object.preventExtensions(ext); // make the object not extensible cannot be added any new object
console.log(Object.isExtensible(ext));

// Object.isFrozen()

const isFrozen = { a: 1, b: 2 };
console.log(Object.isFrozen(isFrozen)); // check the object is frozen or not

// Object.keys()

const keys = { a: 1, b: 2 };
console.log(Object.keys(keys)); // gives the object keys

// Object.values()

const values = { a: 1, b: 2 };
console.log(Object.values(keys)); //gives the values of the keys

// Both key and values

const keyvalues = { a: 1, b: 2 };
for (let [key, value] of Object.entries(keyvalues)) {
  console.log("key", key, "value", value);
}
