class Stack {
  #list = []; // Private field

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

  currentSize() {
    return this.#list.length;
  }

  push(value) {
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

  delete() {
    this.#list = []; // Reset to a new empty array
  }
}

// Test cases for Stack class
// const stack = new Stack();
// console.log('===== Test: isEmpty() on a new stack =====');
// console.log(stack.isEmpty() === true); // Expected: true
// console.log('===== Test: currentSize() on a new stack =====');
// console.log(stack.currentSize() === 0); // Expected: 0
// console.log('===== Test: pop() on an empty stack =====');
// console.log(stack.pop() === null); // Expected: null (should log "Cannot pop from an empty stack")
// console.log('===== Test: peek() on an empty stack =====');
// console.log(stack.peek() === null); // Expected: null (should log "Cannot peek from an empty stack")
// console.log('===== Test: printStack() on an empty stack =====');
// stack.printStack(); // Expected: "Stack is empty"
// console.log('===== Test: push() elements into the stack =====');
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.currentSize() === 3); // Expected: true
// console.log('===== Test: isEmpty() after pushing elements =====');
// console.log(stack.isEmpty() === false); // Expected: false
// console.log('===== Test: peek() after pushing elements =====');
// console.log(stack.peek() === 30); // Expected: 30
// console.log('===== Test: pop() elements from the stack =====');
// console.log(stack.pop() === 30); // Expected: 30
// console.log(stack.pop() === 20); // Expected: 20
// console.log(stack.pop() === 10); // Expected: 10
// console.log('===== Test: pop() after stack is empty again =====');
// console.log(stack.pop() === null); // Expected: null (should log "Cannot pop from an empty stack")
// console.log('===== Test: printStack() after popping all elements =====');
// stack.printStack(); // Expected: "Stack is empty"
// console.log('===== Test: push() again after emptying the stack =====');
// stack.push(5);
// stack.push(15);
// stack.printStack(); // Expected output: 15 \n 5
// console.log('===== Test: delete() method to clear the stack =====');
// stack.delete();
// console.log(stack.isEmpty() === true); // Expected: true
// console.log(stack.currentSize() === 0); // Expected: 0
// console.log('===== Test: pop() after delete() =====');
// console.log(stack.pop() === null); // Expected: null (should log "Cannot pop from an empty stack")
// console.log('===== Test: peek() after delete() =====');
// console.log(stack.peek() === null); // Expected: null (should log "Cannot peek from an empty stack")
// console.log('===== Test: printStack() after delete() =====');
// stack.printStack(); // Expected: "Stack is empty"

// Edge Cases
// console.log('===== Edge Case: Pushing null/undefined values =====');
// stack.push(null);
// stack.push(undefined);
// console.log(stack.peek() === undefined); // Expected: undefined (last pushed element)
// console.log(stack.pop() === undefined); // Expected: undefined
// console.log(stack.pop() === null); // Expected: null
// console.log('===== Edge Case: Pushing different data types =====');
// stack.push(42); // Number
// stack.push('hello'); // String
// stack.push(true); // Boolean
// stack.push([1, 2, 3]); // Array
// stack.push({ a: 1 }); // Object
// stack.printStack();
// console.log(stack.pop()); // Expected: { a: 1 }
// console.log(stack.pop()); // Expected: [1, 2, 3]
// console.log(stack.pop()); // Expected: true
// console.log(stack.pop()); // Expected: "hello"
// console.log(stack.pop()); // Expected: 42
// console.log('===== Edge Case: Large Number of Elements =====');
// for (let i = 0; i < 1000; i++) {
//   stack.push(i);
// }
// console.log(stack.currentSize() === 1000); // Expected: true
// console.log(stack.peek() === 999); // Expected: 999
// for (let i = 999; i >= 0; i--) {
//   console.log(stack.pop() === i); // Expected: true for all
// }
// console.log(stack.isEmpty() === true); // Expected: true
// console.log('===== Edge Case: Deleting an Already Empty Stack =====');
// stack.delete();
// console.log(stack.isEmpty() === true); // Expected: true
// console.log('===== Edge Case: Multiple Consecutive Deletions =====');
// stack.delete();
// stack.delete();
// console.log(stack.isEmpty() === true); // Expected: true
// console.log('===== Edge Case: Push, Delete, Push Again =====');
// stack.push('First');
// stack.push('Second');
// stack.delete();
// stack.push('New');
// console.log(stack.peek() === 'New'); // Expected: "New"
// console.log(stack.pop() === 'New'); // Expected: "New"
// console.log(stack.isEmpty() === true); // Expected: true
