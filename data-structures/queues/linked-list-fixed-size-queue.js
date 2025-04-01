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
  #capacity = 0;
  #size = 0;

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error(
        'Queue capacity must be a positive integer greater than zero.'
      );
    }
    this.#capacity = capacity;
  }

  isEmpty() {
    return this.#size === 0;
  }

  isFull() {
    return this.#size >= this.#capacity;
  }

  queueCapacity() {
    return this.#capacity;
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
    if (this.isFull()) {
      console.log('Queue is full, cannot enqueue.');
      return;
    }

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

    console.log('Queue has been deleted.');
  }
}

// Test case 1: Initialize Queue with a valid capacity
// const queue1 = new Queue(3);
// console.log(queue1.queueCapacity()); // Expected: 3
// console.log(queue1.currentSize()); // Expected: 0
// queue1.printQueue(); // Expected: Queue is empty.

// Test case 2-a: Initialize Queue with an invalid capacity
// try {
//   new Queue(0); // Expected: Error: Queue capacity must be a positive integer greater than zero.
// } catch (e) {
//   console.log(e.message); // Expected: Queue capacity must be a positive integer greater than zero.
// }

// Test case 2-b: Initialize Queue with an invalid capacity
// try {
//   new Queue(-1); // Expected: Error: Queue capacity must be a positive integer greater than zero.
// } catch (e) {
//   console.log(e.message); // Expected: Queue capacity must be a positive integer greater than zero.
// }

// Test case 2-c: Initialize Queue with an invalid capacity
// try {
//   new Queue('abcd'); // Expected: Error: Queue capacity must be a positive integer greater than zero.
// } catch (e) {
//   console.log(e.message); // Expected: Queue capacity must be a positive integer greater than zero.
// }

// Test case 3: Enqueue and check size
// const queue = new Queue(3);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.currentSize()); // Expected: 3
// queue.printQueue(); // Expected: 10 -> 20 -> 30

// Test case 4: Attempt to enqueue when queue is full
// queue.enqueue(40); // Expected: Queue is full, cannot enqueue.

// Test case 5: Dequeue and check size
// console.log(queue.dequeue()); // Expected: 10
// console.log(queue.currentSize()); // Expected: 2
// queue.printQueue(); // Expected: 20 -> 30

// Test case 6: Dequeue all elements
// console.log(queue.dequeue()); // Expected: 20
// console.log(queue.dequeue()); // Expected: 30

// Test case 7: Dequeue from an empty queue
// console.log(queue.dequeue()); // Expected: Cannot dequeue from an empty queue. (return value: null)

// Test case 8: Peek when queue is empty
// console.log(queue.peek()); // Expected: Cannot peek from an empty queue. (return value: null)

// Test case 9: Peek when queue is not empty
// queue.enqueue(50);
// console.log(queue.peek()); // Expected: 50

// Test case 10: Delete the queue
// queue.delete(); // Expected: Queue has been deleted.
// queue.printQueue(); // Expected: Queue is empty.
// console.log(queue.currentSize()); // Expected: 0

// Test case 11: Delete an already empty queue
// queue.delete(); // Expected: Queue is empty.
// queue.printQueue(); // Expected: Queue is empty.
// console.log(queue.currentSize()); // Expected: 0

// Test case 12: Test the behavior when all elements are enqueued and dequeued
// const queue4 = new Queue(3);
// queue4.enqueue(100);
// queue4.enqueue(200);
// queue4.enqueue(300);
// console.log(queue4.currentSize()); // Expected: 3
// queue4.printQueue(); // Expected: 100 -> 200 -> 300
// queue4.dequeue(); // Expected: 100
// queue4.dequeue(); // Expected: 200
// queue4.dequeue(); // Expected: 300
// queue4.enqueue(400); // Expected: Enqueues 400
// queue4.printQueue(); // Expected: 400

// Test case 13: Test peek and dequeue after delete
// queue4.delete();
// console.log(queue4.peek()); // Expected: Cannot peek from an empty queue. (return value: null)
// console.log(queue4.dequeue()); // Expected: Cannot dequeue from an empty queue.(return value: null)
