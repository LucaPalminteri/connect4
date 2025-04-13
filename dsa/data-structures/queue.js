// Queue (FIFO - First In, First Out)
// A linear data structure where the first element added is the first to be removed
// Common operations: enqueue (add), dequeue (remove), front (view first)

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" <- "));
  }
}

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

queue.print();

console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.isEmpty());
