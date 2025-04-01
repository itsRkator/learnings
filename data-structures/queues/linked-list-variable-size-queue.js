class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
  }
}

class Queue {
  #queue = new LinkedList();
  #size = 0;

  isEmpty() {
    return this.#size === 0;
  }

  currentSize() {
    return this.#size;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return;
    }

    let current = this.#queue.front;
    const nodes = [];

    while (current) {
      nodes.push(current.data);
      current = current.next;
    }
    console.log(nodes.join(' -> '));
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.#queue.front = node;
      this.#queue.rear = node;
    } else {
      this.#queue.rear.next = node;
      this.#queue.rear = node;
    }

    this.#size += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Cannot dequeue from an empty queue.');
      return null;
    }

    const dequeuedValue = this.#queue.front.data;

    if (this.#size === 1) {
      this.#queue.front = null;
      this.#queue.rear = null;
    } else {
      this.#queue.front = this.#queue.front.next;
    }

    this.#size -= 1;

    return dequeuedValue;
  }

  findMinimum() {
    if (this.isEmpty()) {
      console.log('Cannot get Minimum from an empty queue.');
      return null;
    }

    let current = this.#queue.front;
    let minimumNode = current;

    while (current) {
      if (minimumNode.data > current.data) {
        minimumNode = current;
      }
      current = current.next;
    }

    return minimumNode;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Cannot peek from an empty queue.');
      return null;
    }

    return this.#queue.front.data;
  }

  delete() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return null;
    }

    this.#queue.front = null;
    this.#queue.rear = null;
    this.#size = 0;
  }
}

// Create a new Queue instance
// const queue = new Queue();

// Test case 1: Attempt to dequeue from an empty queue
// console.log(queue.dequeue()); // Expected output: "Cannot dequeue from an empty queue." and null

// Test case 2: Attempt to peek from an empty queue
// console.log(queue.peek()); // Expected output: "Cannot peek from an empty queue." and null

// Test case 3: Enqueue an item and check if queue is not empty
// queue.enqueue(10);
// console.log(queue.isEmpty()); // Expected output: false
// console.log(queue.currentSize()); // Expected output: 1

// Test case 4: Peek the first element after enqueueing one element
// console.log(queue.peek()); // Expected output: 10

// Test case 5: Dequeue an item and check if the queue is empty again
// console.log(queue.dequeue()); // Expected output: 10
// console.log(queue.isEmpty()); // Expected output: true
// console.log(queue.currentSize()); // Expected output: 0

// Test case 6: Enqueue multiple elements and print the queue
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.printQueue(); // Expected output: "20 -> 30 -> 40"

// Test case 7: Dequeue items and check the queue state after each dequeue
// console.log(queue.dequeue()); // Expected output: 20
// queue.printQueue(); // Expected output: "30 -> 40"
// console.log(queue.dequeue()); // Expected output: 30
// queue.printQueue(); // Expected output: "40"
// console.log(queue.dequeue()); // Expected output: 40
// queue.printQueue(); // Expected output: "Queue is empty."

// Test case 8: Test the delete method when the queue is empty
// queue.delete(); // Expected output: "Queue is empty." (internal print inside delete)
// queue.printQueue(); // Expected output: "Queue is empty."

// Test case 9: Test the delete method when the queue has elements
// queue.enqueue(50);
// queue.enqueue(60);
// queue.delete(); // Should delete all elements
// queue.printQueue(); // Expected output: "Queue is empty."

// Test case 10: Test enqueue after delete
// queue.enqueue(70);
// queue.printQueue(); // Expected output: "70"

// Test case 11: Enqueue elements, delete, then enqueue again to check if queue behaves correctly
// queue.enqueue(80);
// queue.enqueue(90);
// queue.delete(); // Should delete all elements
// queue.enqueue(100);
// queue.printQueue(); // Expected output: "100"
