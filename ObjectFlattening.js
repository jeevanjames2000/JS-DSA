function GenerateFlattenObj(obj, parent) {
  let flat = {};

  const FlatFunc = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      console.log("typeof value: ", typeof value); //typeof value:  string  (push it into flat object)
      //typeof value:  object (if condition true call the recursive func)
      //typeof value:  string  (push it into flat object)
      //typeof value:  object (if condition true call the recursive func)
      //typeof value:  string  (push it into flat object)
      //typeof value:  object (if condition true call the recursive func)
      //typeof value:  number  (push it into flat object)

      if (typeof value === "object") {
        FlatFunc(value, newParent + "."); // used recursive function with current new key and values untill the type is not an object
      } else {
        flat[newParent] = value; // (push it into flat object)
      }
    }
  };
  FlatFunc(obj, parent);
  return flat;
}

const data = {
  a: "2",
  b: "3",
  c: {
    d: "@3",
    e: {
      f: "55",
    },
    g: [4, 5],
  },
};

console.log(GenerateFlattenObj(data, "")); // passing initial value of parent as empty because we are at start
