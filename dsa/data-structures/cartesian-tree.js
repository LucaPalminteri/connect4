// min-heap

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class CartesianTree {
  constructor(arr = []) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    if (!arr.length) return null;

    const minIndex = arr.reduce((minIdx, val, i) => (val < arr[minIdx] ? i : minIdx), 0);

    const root = new Node(arr[minIndex]);

    root.left = this.buildTree(arr.slice(0, minIndex));
    root.right = this.buildTree(arr.slice(minIndex + 1));

    return root;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }

  preOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
    return result;
  }
}

const arr = [5, 2, 6, 1, 3];
const ct = new CartesianTree(arr);

console.log("In-order:", ct.inOrderTraversal());
console.log("Pre-order:", ct.preOrderTraversal());
