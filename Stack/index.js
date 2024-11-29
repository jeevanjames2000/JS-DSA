class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MainStack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    let current = this.first;
    if (this.length === 0) {
      this.first = newNode;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }
    let current = this.first;
    this.first = this.first.next;
    current.next = null;
    this.length--;
    return current;
  }
  min() {
    if (this.length === 0) {
      return null;
    }

    let current = this.first;
    let min = current.value;

    while (current.next) {
      current = current.next;
      if (current.value < min) {
        console.log(current.value, min);
        min = current.value;
      }
    }
    return min;
  }

  reverse(str) {
    let stack = [];
    for (let char of str) {
      stack.push(char);
    }
    let rev = "";
    while (stack.length > 0) {
      rev += stack.pop(); //storing the deleted last element in rev string and printing it
    }
    return rev;
  }
}

let Stack = new MainStack(0);
Stack.push(1);
Stack.push(2);
Stack.min();

console.log("Stack. ", Stack.reverse("Hello"));

console.log(Stack);
