class StackNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

class Stack {
  #list = new LinkedList();
  #size = 0;

  isEmpty() {
    return this.#size === 0;
  }

  printStack() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return;
    }

    let stackArray = [];
    let current = this.#list.head;
    while (current) {
      stackArray.push(JSON.stringify(current.data));
      current = current.next;
    }

    console.log(stackArray.join('\n'));
  }

  currentSize() {
    return this.#size;
  }

  pushNode(value) {
    const node = new StackNode(value);
    node.next = this.#list.head;
    this.#list.head = node;
    this.#size++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return null;
    }

    const poppedNode = this.#list.head;
    this.#list.head = this.#list.head.next;
    poppedNode.next = null;
    this.#size--;
    return poppedNode.data;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return null;
    }

    return this.#list.head.data;
  }

  deleteStack() {
    if (this.isEmpty()) {
      console.log('Stack is Empty.');
      return;
    }

    this.#list.head = null;
    this.#size = 0;
  }
}

// Test Case 1: Test Stack Initialization
// console.log('Test Case 1: Initializing Stack');
// let stack = new Stack();
// console.log('Expected Output: Stack is Empty.');
// stack.printStack();

// Test Case 2: Test Push Node Operation
// console.log('\nTest Case 2: Pushing Elements to Stack');
// stack.pushNode([10]); // Stack: [10]
// stack.pushNode(20); // Stack: [20, 10]
// stack.pushNode(30); // Stack: [30, 20, 10]
// stack.printStack(); // Expected Output: 30\n20\n10

// Test Case 3: Test Peek Operation
// console.log('\nTest Case 3: Peeking Top Element of Stack');
// console.log(stack.peek()); // Expected Output: 30 (Top element)

// Test Case 4: Test Pop Operation
// console.log('\nTest Case 4: Popping Top Element from Stack');
// console.log(stack.pop()); // Expected Output: 30 (Popped element)
// stack.printStack(); // Expected Output: 20\n10

// Test Case 5: Test Pop from Empty Stack
// console.log('\nTest Case 5: Popping from Empty Stack');
// stack.pop(); // Stack: [20]
// stack.pop(); // Stack: []
// console.log(stack.pop()); // Expected Output: "Stack is Empty."
// stack.printStack(); // Expected Output: Stack is Empty.

// Test Case 6: Test Peek from Empty Stack
// console.log('\nTest Case 6: Peeking from Empty Stack');
// console.log(stack.peek()); // Expected Output: "Stack is Empty."

// Test Case 7: Test Stack Size After Push and Pop
// console.log('\nTest Case 7: Testing Size of Stack');
// stack.pushNode(100); // Stack: [100]
// stack.pushNode(200); // Stack: [200, 100]
// console.log(stack.currentSize()); // Expected Output: 2 (Size of the stack)
// stack.pop(); // Stack: [100]
// console.log(stack.currentSize()); // Expected Output: 1 (Size after pop)

// Test Case 8: Test Deleting the Stack
// console.log('\nTest Case 8: Deleting the Stack');
// stack.deleteStack(); // Stack is cleared
// console.log(stack.currentSize()); // Expected Output: 0 (Stack should be empty now)
// stack.printStack(); // Expected Output: Stack is Empty.
// stack.pushNode(1); // Stack: [1]
// stack.pushNode(2); // Stack: [2, 1]
// stack.printStack(); // Expected Output: 2\n1

// Test Case 9: Test Edge Case - Pushing Null or Undefined
// console.log('\nTest Case 9: Pushing Null or Undefined to Stack');
// stack.pushNode(null); // Stack: [null, 2, 1]
// stack.pushNode(undefined); // Stack: [undefined, null, 2, 1]
// stack.printStack(); // Expected Output: undefined\nnull\n2\n1

// Test Case 10: Test Push and Pop of Large Values
// console.log('\nTest Case 10: Pushing and Popping Large Numbers');
// stack.pushNode(1000000); // Stack: [1000000, undefined, null, 2, 1]
// stack.pushNode(999999999); // Stack: [999999999, 1000000, undefined, null, 2, 1]
// console.log(stack.pop()); // Expected Output: 999999999 (Popped largest element)
// stack.printStack(); // Expected Output: 1000000\nundefined\nnull\n2\n1

// Test Case 11: Test Stack Deletion After Operations
// console.log('\nTest Case 11: Deleting Stack After Operations');
// stack.deleteStack(); // Stack is cleared
// console.log(stack.isEmpty()); // Expected Output: true (Stack should be empty)
// stack.printStack(); // Expected Output: Stack is Empty.
