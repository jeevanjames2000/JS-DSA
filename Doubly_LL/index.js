// Doubly Linked List

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinked {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    let temp = this.head; //first take the current node or head node into temp var
    let prev = this.head; //take the same head in prev also

    while (temp.next) {
      prev = temp; //changing head into prev node
      temp = prev.next; //taking the next node into temp
    }

    this.tail = this.tail.prev; //making the tail as prev or the last element
    this.tail.next = null; // making the tail.next node to null end
    this.length--; //reeduce the length by -1

    return temp;
  }

  unshfit(value) {
    let newNode = new Node(value);
    let temp = this.head;
    let prev = temp;

    this.prev = newNode;
    this.prev.next = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    let temp = this.head;
    this.head = temp.next;
    this.head.prev = null;
    return this;
  }
  reverse() {
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return temp;
  }
}

let DLL = new DoublyLinked(0);
console.log(DLL.push(1));
console.log(DLL.push(2));

// DLL.pop();
console.log(DLL.reverse());
console.log("DLL", DLL);
