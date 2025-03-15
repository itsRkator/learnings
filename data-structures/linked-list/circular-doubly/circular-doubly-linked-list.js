class CircularDoublyLinkedListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getLength() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    const listArray = [];

    if (this.isEmpty()) {
      return listArray;
    }

    let current = this.head;
    do {
      listArray.push(current.data);
      current = current.next;
    } while (current !== this.head);

    return listArray;
  }

  contains(value) {
    if (this.isEmpty()) {
      return false;
    }

    let current = this.head;

    do {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    } while (current !== this.head);

    return false;
  }

  traverse() {
    if (this.isEmpty()) {
      console.log('List is Empty');
    } else {
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }

  reverseTraverse() {
    if (this.isEmpty()) {
      console.log('List is Empty');
      return;
    }

    let current = this.tail;
    do {
      console.log(current.data);
      current = current.prev;
    } while (current !== this.tail);
  }

  printList() {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    let result = '';
    let current = this.head;

    do {
      result += current.data;
      if (current.next !== this.head) {
        result += ' <--> ';
      }

      current = current.next;
    } while (current !== this.head);

    console.log(result);
  }

  shiftNode() {
    if (this.isEmpty()) {
      console.log('Cannot shift from an empty list');
      return null;
    }

    const node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }

    this.length -= 1;

    node.next = null;
    node.prev = null;

    return node;
  }

  unshiftNode(value) {
    const node = new CircularDoublyLinkedListNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }

    this.length += 1;
  }

  pushNode(value) {
    const node = new CircularDoublyLinkedListNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }

    this.length += 1;
  }

  popNode() {
    if (this.isEmpty()) {
      console.log('Cannot pop from an empty list');
      return null;
    }

    const node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }

    this.length -= 1;

    node.next = null;
    node.prev = null;

    return node;
  }

  insertNode(position, value) {
    if (position <= 0 || position > this.length + 1) {
      console.log('Invalid position');
      return;
    }

    if (position === 1) {
      this.unshiftNode(value);
      return;
    }
    if (position === this.length + 1) {
      this.pushNode(value);
      return;
    }

    const node = new CircularDoublyLinkedListNode(value);
    let current = this.head;
    for (let i = 1; i < position - 1; i++) {
      current = current.next;
    }

    node.next = current.next;
    node.prev = current;
    current.next.prev = node;
    current.next = node;

    this.length += 1;
  }

  removeNode(position) {
    if (position <= 0 || position > this.length) {
      console.log('Invalid node position');
      return null;
    }
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    if (position === 1) {
      return this.shiftNode();
    }

    if (position === this.length) {
      return this.popNode();
    }

    let current = this.head;
    for (let i = 1; i < position - 1; i++) {
      current = current.next;
    }

    const removedNode = current.next;
    current.next = removedNode.next;
    if (removedNode.next) {
      removedNode.next.prev = current;
    }

    this.length -= 1;

    removedNode.next = null;
    removedNode.prev = null;

    return removedNode;
  }

  removeNodeByValue(value) {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    if (this.head.data === value) {
      return this.shiftNode();
    }
    if (this.tail.data === value) {
      return this.popNode();
    }

    let current = this.head;
    do {
      current = current.next;
    } while (current !== this.head && current.next.data !== value);

    if (current.next.data === value) {
      const removedNode = current.next;

      current.next = removedNode.next;
      if (removedNode.next) {
        removedNode.next.prev = current;
      }

      removedNode.next = null;
      removedNode.prev = null;

      this.length -= 1;
      return removedNode;
    }

    console.log('Value not found');
    return null;
  }

  getIndex(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let index = 0;
    let current = this.head;
    do {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index += 1;
    } while (current !== this.head);

    return -1;
  }

  setNodeValue(index, value) {
    if (index < 0 || index >= this.length) {
      console.log('Invalid index');
      return false;
    }

    if (this.isEmpty()) {
      console.log('List is empty');
      return false;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.data = value;

    return true;
  }

  findByIndex(index) {
    if (this.isEmpty() || index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  find(value) {
    if (this.isEmpty()) {
      return null;
    }

    let current = this.head;
    do {
      if (current.data === value) {
        return current;
      }
      current = current.next;
    } while (current !== this.head);

    return null;
  }

  delete() {
    if (this.isEmpty()) {
      console.log('List is already empty. Nothing to delete.');
    } else {
      let current = this.head;

      // Traverse and break all links
      do {
        const nextNode = current.next;
        current.prev = null;
        current.next = null;
        current = nextNode;
      } while (current !== this.head);

      // Reset the list's head, tail, and length
      this.head = null;
      this.tail = null;
      this.length = 0;

      console.log('List has been cleared.');
    }
  }

  reverse() {
    if (this.isEmpty() || this.length === 1) {
      return;
    }

    let prev = null;
    let current = this.head;
    this.tail = this.head;

    do {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    } while (current !== this.head);

    this.head = prev;
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  middle() {
    if (this.isEmpty()) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    do {
      slow = slow.next;
      fast = fast.next.next;
    } while (fast !== this.head && fast.next !== this.head);

    return slow;
  }

  removeDuplicates() {
    if (this.isEmpty()) {
      return;
    }

    const visited = new Set();
    let current = this.head;

    visited.add(current.data);

    while (current.next !== this.head) {
      if (visited.has(current.next.data)) {
        const removedNode = current.next;
        current.next = removedNode.next;
        if (removedNode.next) {
          removedNode.next.prev = current;
        }

        this.length -= 1;
        removedNode.next = null;
        removedNode.prev = null;
      } else {
        visited.add(current.next.data);
        current = current.next;
      }
    }

    this.tail = current;
    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
}

// Initialize the Circular Doubly Linked List
// const list = new CircularDoublyLinkedList();

// Edge case: Operations on an empty list
// console.log('Edge Case 1: Operations on an Empty List');
// console.log(list.getLength()); // Expected: 0
// console.log(list.isEmpty()); // Expected: true
// console.log(list.toArray()); // Expected: []
// console.log(list.contains(10)); // Expected: false
// console.log(list.shiftNode()); // Expected: null
// console.log(list.popNode()); // Expected: null
// list.removeNode(1); // Expected: "Invalid node position"
// list.removeNodeByValue(10); // Expected: "List is empty"
// console.log(list.find(10)); // Expected: null
// console.log(list.findByIndex(0)); // Expected: null
// list.delete(); // Expected: "List is already empty. Nothing to delete."

// Edge case: Adding nodes to an empty list and testing various operations
// console.log('\nEdge Case 2: Adding Nodes to an Empty List');
// list.pushNode(10); // List: 10
// list.pushNode(20); // List: 10 <--> 20
// list.pushNode(30); // List: 10 <--> 20 <--> 30
// console.log(list.getLength()); // Expected: 3
// list.traverse(); // Expected: 10, 20, 30
// console.log(list.toArray()); // Expected: [10, 20, 30]
// console.log(list.contains(20)); // Expected: true
// console.log(list.contains(40)); // Expected: false

// Edge case: Removing nodes from a list
// console.log('\nEdge Case 3: Removing Nodes from the List');
// list.removeNode(2); // List: 10 <--> 30
// list.traverse(); // Expected: 10, 30
// list.popNode(); // List: 10
// list.shiftNode(); // List: empty
// console.log(list.isEmpty()); // Expected: true

// Edge case: Handling invalid positions when inserting or removing
// console.log('\nEdge Case 4: Invalid Operations');
// list.insertNode(0, 10); // Expected: "Invalid position"
// list.insertNode(2, 20); // Expected: "Invalid position"
// list.removeNode(5); // Expected: "Invalid node position"
// list.removeNodeByValue(100); // Expected: "List is empty"

// Edge case: Insert node at the head and tail
// console.log('\nEdge Case 5: Insert at Head and Tail');
// list.pushNode(10); // List: 10
// list.unshiftNode(5); // List: 5 <--> 10
// list.pushNode(15); // List: 5 <--> 10 <--> 15
// list.unshiftNode(0); // List: 0 <--> 5 <--> 10 <--> 15
// list.traverse(); // Expected: 0, 5, 10, 15

// Edge case: Insert and remove node at specific positions
// console.log('\nEdge Case 6: Insert and Remove Node at Specific Positions');
// list.insertNode(2, 7); // List: 0 <--> 5 <--> 7 <--> 10 <--> 15
// list.traverse(); // Expected: 0, 7, 5, 10, 15
// list.removeNode(3); // List: 0 <--> 7 <--> 10 <--> 15
// list.traverse(); // Expected: 0, 7, 10, 15

// Test case: Reverse the list
// console.log('\nTest Case 1: Reverse the List');
// list.reverse(); // List: 15 <--> 10 <--> 7 <--> 0
// list.traverse(); // Expected: 15, 10, 7, 0

// Test case: Middle element
// console.log('\nTest Case 2: Find the Middle Element');
// console.log(list.middle().data); // Expected: 7 (Middle of 15 <--> 10 <--> 7 <--> 0)

// Test case: Remove duplicates
// console.log('\nTest Case 3: Remove Duplicates');
// list.pushNode(7); // List: 15 <--> 10 <--> 7 <--> 0 <--> 7
// list.removeDuplicates(); // List: 15 <--> 10 <--> 7 <--> 0
// list.traverse(); // Expected: 15, 10, 7, 0

// Test case: Set Node Value
// console.log('\nTest Case 4: Set Node Value');
// list.setNodeValue(2, 10); // List: 15 <--> 10 <--> 10 <--> 0
// list.traverse(); // Expected: 15, 10, 10, 0

// Edge case: Test reverse traversal
// console.log('\nEdge Case 7: Reverse Traversal');
// list.reverseTraverse(); // Expected: 0, 10, 10, 15

// Test case: Deleting the entire list
// console.log('\nTest Case 5: Delete the Entire List');
// list.delete(); // Expected: "List has been cleared."
// list.traverse(); // Expected: "List is Empty"

// Edge case: Set Node Value on an empty list
// console.log('\nEdge Case 8: Set Node Value on an Empty List');
// console.log(list.setNodeValue(0, 100)); // Expected: false
