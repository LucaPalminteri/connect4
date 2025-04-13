// Singly Linked List (Linked List only also)
// A linear data structure where each element points to the next
// Only supports forward traversal

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) this.prepend(value);

    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    newNode.next = current;
    previous.next = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index > this.length) return null;

    let current = this.head;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      previous.next = current.next;
    }

    this.length--;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  print() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAt(2, 15);

list.print();

console.log("Index of 20:", list.find(20));

list.removeAt(2);
list.print();
