// Singly linked list

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // push method in SLL

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // Pop in SLL
  pop(value) {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // unshift adds element in starting in SSL

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // shift remove first element

  shift(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    this.head = this.head.next;
    currentNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentNode;
  }

  // return first element in list

  getfirst() {
    let temp = this.head;
    // console.log('first element ', this.head);
    return temp;
  }

  // return last element of list

  getLast() {
    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }

  // find element by index

  getIndex(value) {
    let temp = this.head;
    let count = 0;

    while (temp) {
      if (count === value) {
        return temp;
      }
      count++;
      temp = temp.next;
    }
    return null;
  }

  // SET the new value for specific index
  setIndex(index, value) {
    let temp = this.getIndex(index);
    if (temp) {
      temp.value = value;
    }
    return temp;
  }

  //   Insert new element where we want based on index

  insertElement(index, value) {
    let temp1 = this.getIndex(0);
    let prevNode = temp1;
    let temp = this.getIndex(index - 1);

    if (index === 0) {
      return this.unshift(value);
    }
    if (this.length === index) {
      return this.push(value);
    }

    const newNode = new Node(value);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  // size of the list

  findSize() {
    let count = 0;
    let temp = this.head;

    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  // clear all the nodes
  deleteList() {
    return null;
  }

  removeDuplicates() {
    let temp = this.head;
    while (temp) {
      if (temp.head === temp.next) {
        temp.next = temp.next.next;
        this.length--;
      } else {
        temp = temp.next;
      }
    }
    return temp;
  }

  // remove element by value
  removeElement(val) {
    while (this.head !== null && this.head.value === val) {
      this.head = this.head.next;
      this.length--;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.head === val) {
        current.next.head = current.next.next;
        if (current.next === this.tail) {
          this.tail = current;
        }
        this.length--;
      } else {
        current = current.next;
      }
    }

    return this;
  }

  // reverse of singly linked list

  reverseList() {
    let current = this.head;
    let next = null;
    let prev = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
    return prev;
  }
}

const mylist = new LinkedList(1);
mylist.push(2);
mylist.push(3);
mylist.push(3);
mylist.push(3);
mylist.reverseList();
mylist.getfirst();
// console.log(mylist.insertElement(4, 100));
// mylist.pop()
// mylist.unshift(0)

// console.log(mylist.deleteList());
console.log(mylist);
