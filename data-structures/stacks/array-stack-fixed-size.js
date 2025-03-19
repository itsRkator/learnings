class Stack {
  #list = []; // Private field
  #capacity = 0;

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error('Stack capacity must be a positive integer greater than zero.');
    }
    this.#capacity = capacity;
  }

  printStack() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
      return;
    }
    console.log(this.#list.toReversed().join('\n'));
  }

  isEmpty() {
    return this.#list.length === 0;
  }

  isFull() {
    return this.#list.length >= this.#capacity;
  }

  currentSize() {
    return this.#list.length;
  }

  capacity() {
    return this.#capacity;
  }

  push(value) {
    if (this.isFull()) {
      console.log('Cannot push into a full stack');
      return;
    }
    this.#list.push(value);
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Cannot peek from an empty stack');
      return null;
    }
    return this.#list[this.#list.length - 1];
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Cannot pop from an empty stack');
      return null;
    }
    return this.#list.pop();
  }

  delete(resetCapacity = false) {
    if (this.isEmpty()) {
      console.log('Cannot delete an empty queue.');
      return null;
    }

    this.#list = [];
    if (resetCapacity) this.#capacity = 0;
  }
}

// Test Cases for Stack Class

// 0-a. Test Stack Initialization with 0 size
// try {
//   new Stack(0); // Should throw an error
// } catch (error) {
//   console.log(error.message); // Expected: "Stack size must be a positive integer."
// }

// 0-b. Test Stack Initialization with negative size
// try {
//   new Stack(-5); // Should throw an error
// } catch (error) {
//   console.log(error.message); // Expected: "Stack size must be a positive integer."
// }

// 1. Test Stack Initialization with invalid value
// try {
//   new Stack('abc'); // Should throw an error
// } catch (error) {
//   console.log(error.message); // Expected: "Stack size must be a positive integer."
// }

// 2. Create a stack of size 3
// const stack = new Stack(3);
// console.log(stack.isEmpty()); // Expected: true
// console.log(stack.isFull()); // Expected: false
// console.log(stack.currentSize()); // Expected: 0
// console.log(stack.capacity()); // Expected: 3
// stack.printStack(); // Expected: "Stack is empty"

// 3. Push elements into the stack
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.printStack(); // Expected Output: 30 \n 20 \n 10
// console.log(stack.isEmpty()); // Expected: false
// console.log(stack.isFull()); // Expected: true
// console.log(stack.currentSize()); // Expected: 3

// 4. Try to push into a full stack
// stack.push(40); // Expected: "Cannot push into a full stack"

// 5. Peek the top element
// console.log(stack.peek()); // Expected: 30 (last pushed)

// 6. Pop elements from the stack
// console.log(stack.pop()); // Expected: 30
// console.log(stack.pop()); // Expected: 20
// console.log(stack.pop()); // Expected: 10
// console.log(stack.pop()); // Expected: "Cannot pop from an empty stack" → null
// console.log(stack.isEmpty()); // Expected: true
// stack.printStack(); // Expected: "Stack is empty"

// 7. Push again after emptying
// stack.push(50);
// console.log(stack.peek()); // Expected: 50
// stack.printStack(); // Expected: "50"

// 8. Delete stack
// stack.delete();
// console.log(stack.isEmpty()); // Expected: true
// stack.printStack(); // Expected: "Stack is empty"

// 9. Check if pushing works after delete
// stack.push(60);
// console.log(stack.peek()); // Expected: 60
// console.log(stack.currentSize()); // Expected: 1
