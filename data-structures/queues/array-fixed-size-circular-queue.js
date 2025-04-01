class Queue {
  #queue = [];
  #capacity = 0;
  #front = -1;
  #rear = -1;

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error(
        'Queue capacity must be a positive integer greater than zero.'
      );
    }
    this.#queue = new Array(capacity).fill(null);
    this.#capacity = capacity;
  }

  isEmpty() {
    return this.#front === -1;
  }

  isFull() {
    // Approach 1
    // return (this.#rear + 1) % this.#capacity === this.#front;

    // Approach 2
    return (
      (this.#rear + 1 === this.#capacity && this.#front === 0) ||
      this.#front === this.#rear + 1
    );
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return;
    }

    let elements = [];
    let i = this.#front;

    // Traverse the queue from front to rear, considering the circular nature
    while (i !== this.#rear) {
      elements.push(this.#queue[i]);
      i = (i + 1) % this.#capacity;
    }

    // Add the last element (rear)
    elements.push(this.#queue[this.#rear]);

    console.log(elements.join(' '));
  }

  currentSize() {
    if (this.isEmpty()) {
      return 0;
    }

    if (this.#front <= this.#rear) {
      return this.#rear - this.#front + 1;
    }

    return this.#capacity - this.#front + this.#rear + 1;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is full, cannot enqueue.');
      return;
    }

    if (this.isEmpty()) {
      // If the queue is empty, set both front and rear to 0
      this.#front = 0;
      this.#rear = 0;
      this.#queue[this.#rear] = value;
      return;
    }

    // Handle the circular nature of the queue
    // Approach 1
    // this.#rear = (this.#rear + 1) % this.#capacity;
    // this.#queue[this.#rear] = value;

    // Approach 2
    if (this.#rear + 1 === this.#capacity) {
      this.#rear = 0; // Wrap around to the start of the queue
    } else {
      this.#rear += 1; // Move to the next rear index
    }

    this.#queue[this.#rear] = value;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty, cannot dequeue.');
      return null;
    }

    const dequeuedValue = this.#queue[this.#front];

    // Approach 1
    // if (this.#front === this.#rear) {
    //   this.#front = -1;
    //   this.#rear = -1;
    // } else {
    //   this.#front = (this.#front + 1) % this.#capacity;
    // }

    // Approach 2
    if (this.#front === this.#rear) {
      this.#front = -1;
      this.#rear = -1;
    } else if (this.#front + 1 === this.#capacity) {
      this.#front = 0;
    } else {
      this.#front++;
    }

    return dequeuedValue;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Queue is empty, cannot peek.');
      return null;
    }

    return this.#queue[this.#front];
  }

  delete() {
    if (this.isEmpty()) {
      console.log('Queue is Empty.');
      return;
    }

    this.#queue = this.#queue.fill(null);
    this.#front = -1;
    this.#rear = -1;

    console.log('Queue is now empty.');
  }
}

// Test for creating a Queue
// console.log('Test Case 1: Creating a Queue');
// try {
//   new Queue(5);
//   console.log('Queue created successfully');
// } catch (e) {
//   console.log(e.message);
// }

// Test for isEmpty on newly created queue (should be empty)
// console.log('\nTest Case 2: isEmpty on newly created queue');
// const queue1 = new Queue(5);
// console.log(queue1.isEmpty()); // Expected: true

// Test for isFull on newly created queue (should be false)
// console.log('\nTest Case 3: isFull on newly created queue');
// console.log(queue1.isFull()); // Expected: false

// Test for enqueueing elements into the queue
// console.log('\nTest Case 4: Enqueue elements into the queue');
// queue1.enqueue(1);
// queue1.enqueue(2);
// queue1.enqueue(3);
// queue1.enqueue(4);
// queue1.enqueue(5);
// queue1.printQueue(); // Expected: 1 2 3 4 5

// Test for isFull after enqueuing to full capacity (should be true)
// console.log('\nTest Case 5: isFull after enqueueing to full capacity');
// console.log(queue1.isFull()); // Expected: true

// Test for enqueue when the queue is full (should not allow enqueueing)
// console.log('\nTest Case 6: Enqueue when the queue is full');
// queue1.enqueue(6); // Expected: 'Queue is full, cannot enqueue.'

// Test for dequeueing an element
// console.log('\nTest Case 7: Dequeue from the queue');
// console.log(queue1.dequeue()); // Expected: 1
// queue1.printQueue(); // Expected: 2 3 4 5

// Test for dequeueing all elements, leaving the queue empty
// console.log('\nTest Case 8: Dequeue all elements, leaving the queue empty');
// queue1.dequeue(); // Expected: 2
// queue1.dequeue(); // Expected: 3
// queue1.dequeue(); // Expected: 4
// queue1.dequeue(); // Expected: 5
// queue1.printQueue(); // Expected: 'Queue is empty'

// Test for isEmpty after dequeuing all elements (should be true)
// console.log('\nTest Case 9: isEmpty after dequeuing all elements');
// console.log(queue1.isEmpty()); // Expected: true

// Test for dequeue when the queue is empty (should not allow dequeueing)
// console.log('\nTest Case 10: Dequeue when the queue is empty');
// console.log(queue1.dequeue()); // Expected: 'Queue is empty, cannot dequeue.'

// Test for peek on empty queue (should return null)
// console.log('\nTest Case 11: Peek on empty queue');
// console.log(queue1.peek()); // Expected: null

// Test for peek on non-empty queue
// console.log('\nTest Case 12: Peek on non-empty queue');
// queue1.enqueue(10);
// queue1.enqueue(20);
// console.log(queue1.peek()); // Expected: 10

// Test for delete method (clear the queue)
// console.log('\nTest Case 13: Delete the queue');
// queue1.delete(); // Expected: 'Queue is now empty.'
// queue1.printQueue(); // Expected: 'Queue is empty'

// Test for delete method on an already empty queue
// console.log('\nTest Case 14: Delete when queue is empty');
// queue1.delete(); // Expected: 'Queue is Empty.'
// queue1.printQueue(); // Expected: 'Queue is empty'

// Test for enqueueing after deleting (should work normally)
// console.log('\nTest Case 15: Enqueue after deleting');
// queue1.enqueue(30);
// queue1.enqueue(40);
// queue1.printQueue(); // Expected: 30 40

// Test for circular behavior: enqueue, dequeue, and wrap around
console.log('\nTest Case 16: Circular behavior test');
// const queue2 = new Queue(3);
// queue2.enqueue(1);
// queue2.enqueue(2);
// queue2.enqueue(3);
// queue2.printQueue(); // Expected: 1 2 3
// queue2.dequeue(); // Expected: 1
// queue2.enqueue(4); // Expected: Queue should have 2, 3, 4
// queue2.printQueue(); // Expected: 2 3 4
// queue2.dequeue(); // Expected: 2
// queue2.enqueue(5); // Expected: Queue should have 3, 4, 5
// queue2.printQueue(); // Expected: 3 4 5

// Test for isFull and isEmpty after circular behavior
// console.log('\nTest Case 17: isFull and isEmpty after circular behavior');
// console.log(queue2.isFull()); // Expected: true
// console.log(queue2.isEmpty()); // Expected: false

// Test for circular behavior with wraparound on enqueue
// console.log('\nTest Case 18: Circular wraparound behavior on enqueue');
// queue2.dequeue(); // Expected: 3
// queue2.dequeue(); // Expected: 4
// queue2.printQueue(); // Expected: '5'
// queue2.enqueue(6); // Expected: Queue should have 5, 6
// queue2.printQueue(); // Expected: 5 6
