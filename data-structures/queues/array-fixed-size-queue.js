class Queue {
  #arrayQueue = [];
  #capacity = 0;

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error(
        'Queue capacity must be a positive integer greater than zero.'
      );
    }
    this.#capacity = capacity;
  }

  isEmpty() {
    return this.#arrayQueue.length === 0;
  }

  isFull() {
    return this.#arrayQueue.length >= this.#capacity;
  }

  currentSize() {
    return this.#arrayQueue.length;
  }

  queueCapacity() {
    return this.#capacity;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return null;
    }
    console.log(this.#arrayQueue.join(' '));
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Cannot enqueue in a full queue');
      return;
    }
    this.#arrayQueue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Cannot dequeue from an empty queue.');
      return null;
    }

    return this.#arrayQueue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Cannot peek from an empty queue.');
      return null;
    }

    return this.#arrayQueue[0];
  }

  delete(resetCapacity = false) {
    if (this.isEmpty()) {
      console.log('Cannot delete an empty queue.');
      return null;
    }

    this.#arrayQueue.length = 0;
    if (resetCapacity) this.#capacity = 0;
  }
}

// Test Case 0: Create a Queue with valid capacity
// let queue = new Queue(3);
// console.log(queue.queueCapacity()); // Expected output: 3
// console.log(queue.isEmpty()); // Expected output: true
// console.log(queue.isFull()); // Expected output: false
// console.log(queue.currentSize()); // Expected output: 0

// Test Case 1: Create a Queue with invalid capacity (negative number)
// try {
//   new Queue(-1);
// } catch (e) {
//   console.log(e.message); // Expected output: "Queue capacity must be a positive integer greater than zero."
// }

// Test Case 2: Create a Queue with invalid capacity (string)
// try {
//   new Queue('abcd');
// } catch (e) {
//   console.log(e.message); // Expected output: "Queue capacity must be a positive integer greater than zero."
// }

// Test Case 3: Enqueue values to the Queue
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.currentSize()); // Expected output: 3
// queue.printQueue(); // Expected output: 10 20 30

// Test Case 4: Enqueue to a full Queue
// queue.enqueue(40); // Expected output: "Cannot enqueue in a full queue"

// Test Case 5: Dequeue values from the Queue
// console.log(queue.dequeue()); // Expected output: 10
// queue.printQueue(); // Expected output: 20 30

// Test Case 6: Dequeue from an empty Queue
// queue.dequeue();
// queue.dequeue();
// console.log(queue.dequeue()); // Expected output: "Cannot dequeue from an empty queue."
// queue.printQueue(); // Expected output: "Queue is empty."

// Test Case 7: Peek at the front element in the Queue
// queue.enqueue(50);
// console.log(queue.peek()); // Expected output: 50

// Test Case 8: Peek when Queue is empty
// queue.dequeue();
// console.log(queue.peek()); // Expected output: "Cannot peek from an empty queue."

// Test Case 9: Check if the Queue is empty
// console.log(queue.isEmpty()); // Expected output: true

// Test Case 10: Check if the Queue is full
// let newQueue = new Queue(2);
// newQueue.enqueue(5);
// newQueue.enqueue(10);
// console.log(newQueue.isFull()); // Expected output: true

// Test Case 11: Delete all elements from the Queue
// newQueue.delete();
// newQueue.printQueue(); // Expected output: "Queue is empty."

// Test Case 12: Delete all elements with reset capacity
// let queueWithReset = new Queue(5);
// queueWithReset.enqueue(1);
// queueWithReset.enqueue(2);
// queueWithReset.delete(true);
// console.log(queueWithReset.queueCapacity()); // Expected output: 0
// queueWithReset.printQueue(); // Expected output: "Queue is empty."

// Test Case 13: Delete from an empty Queue
// queue.delete(); // Expected output: "Cannot delete an empty queue."

// Test Case 14: Enqueue after deleting the Queue
// queue.enqueue(100);
// queue.printQueue(); // Expected output: 100

// Test Case 15: Enqueue negative values
// queue.enqueue(-10);
// queue.printQueue(); // Expected output: 100 -10

// Test Case 16: Enqueue zero value
// queue.enqueue(0);
// queue.printQueue(); // Expected output: 100 -10 0

// Test Case 17: Test capacity edge case with large number
// let largeQueue = new Queue(1000000);
// console.log(largeQueue.queueCapacity()); // Expected output: 1000000
// largeQueue.enqueue(1);
// console.log(largeQueue.peek()); // Expected output: 1

// Test Case 18: Enqueue with non-integer values (should still work for any value)
// queue.enqueue('Hello');
// queue.printQueue(); // Expected output: 100 -10 0 Hello
