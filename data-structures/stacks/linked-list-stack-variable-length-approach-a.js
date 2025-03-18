class StackNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  #length = 0;
  #head = null;

  isEmpty() {
    return this.#length === 0;
  }

  printStack() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return;
    }

    let stackArray = [];
    let current = this.#head;
    while (current) {
      stackArray.push(JSON.stringify(current.data));
      current = current.next;
    }

    console.log(stackArray.join('\n')); // Join the array to print all values in a single output.
  }

  currentSize() {
    return this.#length;
  }

  pushNode(value) {
    const node = new StackNode(value);
    if (this.isEmpty()) {
      this.#head = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    this.#length += 1;
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return null;
    }

    const node = this.#head;
    this.#head = this.#head.next;
    this.#length -= 1;

    node.next = null; // Disconnect the node to help garbage collection
    return node.data; // Return the value of the popped node
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return null;
    }

    return this.#head.data;
  }

  deleteStack() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return;
    }
    this.#head = null;
    this.#length = 0;
  }
}

// Test Case Suite for Stack Class
// console.log('Test Case 0: Initializing Stack');
// const stack = new Stack();

// Test Case 1: Check if the stack is initially empty
// console.log('Test 1: Stack should be empty initially.');
// console.log(stack.isEmpty()); // true

// Test Case 2: Peek on an empty stack
// console.log('\nTest 2: Peek on an empty stack.');
// console.log(stack.peek()); // "Stack is Empty."

// Test Case 3: Pop on an empty stack
// console.log('\nTest 3: Pop on an empty stack.');
// console.log(stack.pop()); // "Stack is Empty."

// Test Case 4: Push a single item to the stack
// console.log('\nTest 4: Push a single item.');
// stack.pushNode(10);
// stack.printStack(); // "10"
// console.log(stack.isEmpty()); // false
// console.log(stack.peek()); // 10

// Test Case 5: Push multiple items to the stack
// console.log('\nTest 5: Push multiple items.');
// stack.pushNode(20);
// stack.pushNode(30);
// stack.printStack(); // "30\n20\n10"
// console.log(stack.peek()); // 30

// Test Case 6: Pop a single item from the stack
// console.log('\nTest 6: Pop a single item.');
// console.log(stack.pop()); // 30
// stack.printStack(); // "20\n10"

// Test Case 7: Pop all items until the stack is empty
// console.log('\nTest 7: Pop all items.');
// console.log(stack.pop()); // 20
// console.log(stack.pop()); // 10
// stack.printStack(); // "Stack is Empty."
// console.log(stack.isEmpty()); // true

// Test Case 8: Delete the stack when it's empty
// console.log('\nTest 8: Delete an empty stack.');
// stack.deleteStack();
// stack.printStack(); // "Stack is Empty."

// Test Case 9: Delete a non-empty stack
// console.log('\nTest 9: Delete a non-empty stack.');
// stack.pushNode(50);
// stack.pushNode(60);
// stack.printStack(); // "60\n50"
// stack.deleteStack();
// stack.printStack(); // "Stack is Empty."

// Test Case 10: Peek on an empty stack after delete
// console.log('\nTest 10: Peek on an empty stack after delete.');
// console.log(stack.peek()); // "Stack is Empty."

// Test Case 11: Push and Peek a single item after delete
// console.log('\nTest 11: Push and Peek a single item after delete.');
// stack.pushNode(100);
// console.log(stack.peek()); // 100

// Test Case 12: Push and Pop the same item
// console.log('\nTest 12: Push and Pop the same item.');
// stack.pushNode(200);
// console.log(stack.pop()); // 200
// stack.printStack(); // "100"

// Test Case 13: Edge case: Push null or undefined
// console.log('\nTest 13: Push null or undefined.');
// stack.pushNode(null);
// stack.pushNode(undefined);
// stack.printStack(); // "undefined\nnull\n100"
// console.log(stack.pop()); // undefined
// console.log(stack.pop()); // null
// stack.printStack(); // "100"

// Test Case 14: Check currentSize of stack
// console.log('\nTest 14: Check current size of stack.');
// console.log(stack.currentSize()); // 1

// Test Case 15: Check after deleting the stack
// console.log('\nTest 15: Check size after deleting stack.');
// stack.deleteStack();
// console.log(stack.currentSize()); // 0
