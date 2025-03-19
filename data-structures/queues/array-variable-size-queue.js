class Queue {
  #arrayQueue = [];

  isEmpty() {
    return this.#arrayQueue.length === 0;
  }

  currentSize() {
    return this.#arrayQueue.length;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return null;
    }
    console.log(this.#arrayQueue.join(' '));
  }

  enqueue(value) {
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

  delete() {
    if (this.isEmpty()) {
      console.log('Cannot delete an empty queue.');
      return null;
    }
    this.#arrayQueue.length = 0;
  }
}

// Create a new Queue instance
// const queue = new Queue();

// Test case 1: Check if the queue is initially empty
// console.log(queue.isEmpty()); // Expected: true (queue should be empty)

// Test case 2: Enqueue a single element into the queue
// queue.enqueue(10);
// console.log(queue.isEmpty()); // Expected: false (queue should not be empty)
// console.log(queue.currentSize()); // Expected: 1 (1 element in the queue)
// queue.printQueue(); // Expected: "10" (queue contains 10)

// Test case 3: Peek into the queue (should return the first element without removing it)
// console.log(queue.peek()); // Expected: 10 (peeks first element, 10)

// Test case 4: Dequeue an element (should remove the first element)
// console.log(queue.dequeue()); // Expected: 10 (dequeues the first element, 10)
// console.log(queue.isEmpty()); // Expected: true (queue should be empty after dequeue)
// console.log(queue.currentSize()); // Expected: 0 (no elements in the queue)
// queue.printQueue(); // Expected: "Queue is empty."

// Test case 5: Dequeue from an empty queue (should show an error message)
// console.log(queue.dequeue()); // Expected: "Cannot dequeue from an empty queue."

// Test case 6: Peek into an empty queue (should show an error message)
// console.log(queue.peek()); // Expected: "Cannot peek from an empty queue."

// Test case 7: Delete an empty queue (should show an error message)
// queue.delete(); // Expected: "Cannot delete an empty queue."

// Test case 8: Enqueue multiple elements into the queue
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.isEmpty()); // Expected: false (queue should contain elements)
// console.log(queue.currentSize()); // Expected: 3 (3 elements in the queue)
// queue.printQueue(); // Expected: "20 30 40" (queue contains 20, 30, 40)

// Test case 9: Dequeue all elements (should remove each element one by one)
// console.log(queue.dequeue()); // Expected: 20 (dequeues 20)
// console.log(queue.dequeue()); // Expected: 30 (dequeues 30)
// console.log(queue.dequeue()); // Expected: 40 (dequeues 40)
// console.log(queue.isEmpty()); // Expected: true (queue should be empty after all dequeues)
// console.log(queue.currentSize()); // Expected: 0 (no elements in the queue)

// Test case 10: Delete the queue after it has been emptied
// queue.delete(); // Expected: "Cannot delete an empty queue." (queue is already empty)
// console.log(queue.isEmpty()); // Expected: true (queue should still be empty)
// console.log(queue.currentSize()); // Expected: 0 (no elements in the queue)
