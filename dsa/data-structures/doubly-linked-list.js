// Doubly Linked List
// A linear data structure where each node points to both its next and previous node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(params) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) this.prepend(value);
    if (index === this.length) this.append(value);

    const newNode = new Node(value);
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    const prevNode = current.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = current;
    current.prev = newNode;

    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index > this.length) return null;

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;

      if (this.head) this.head.prev = null;
      if (this.length === 1) this.tail = null;
    } else if (index === this.length - 1) {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }

      removedNode = current;
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length++;
  }

  printForward() {
    let current = this.head;
    let values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log("Forward: ", values.join(" <-> "));
  }

  printBackward() {
    let current = this.tail;
    let values = [];

    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    console.log("Backward: ", values.join(" <-> "));
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const list = new DoublyLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAt(2, 15);

list.printForward();
list.printBackward();

list.removeAt(2);
list.printForward();
