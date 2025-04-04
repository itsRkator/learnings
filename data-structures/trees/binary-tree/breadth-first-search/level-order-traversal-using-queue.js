class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  #front = null;
  #rear = null;
  #length = 0;

  get length() {
    return this.#length;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.#front) {
      this.#front = node;
      this.#rear = node;
    } else {
      this.#rear.next = node;
      this.#rear = node;
    }
    this.#length++;
  }

  dequeue() {
    if (!this.#front) {
      return;
    }

    const node = this.#front;

    if (this.#front === this.#rear) {
      this.#front = null;
      this.#rear = null;
    } else {
      this.#front = this.#front.next;
    }

    this.#length--;

    node.next = null;

    return node;
  }
}

// Breadth First search
const levelOrderTraversalUsingQueue = (root) => {
  if (!root) {
    return;
  }

  const queue = new Queue();

  queue.enqueue(root);

  while (queue.length) {
    const node = queue.dequeue()?.data;
    console.log(node.data);

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }
};

module.exports = { levelOrderTraversalUsingQueue };
