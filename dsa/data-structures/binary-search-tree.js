class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }

    return false;
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return current;
      if (value < current.value) current = current.left;
      else current = current.right;
    }

    return null;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }

  breadthFirstSearch() {
    const queue = [];
    const result = [];
    let current = this.root;

    if (!current) return result;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      result.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log("Contains 15:", bst.contains(15));
console.log("Find 6:", bst.find(6));
console.log("In-order:", bst.inOrderTraversal());
console.log("BFS:", bst.breadthFirstSearch());
