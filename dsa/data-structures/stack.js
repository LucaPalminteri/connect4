// Stack (LIFO - Last In, First Out)
// A linear data structure where the last element added is the first to be removed
// Common opperations: push (add), pop (remove), peek (view top)

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.join(" -> "));
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

stack.pop();
console.log(stack.peek());

stack.print();
