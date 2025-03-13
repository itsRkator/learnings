class CircularSinglyLinkedListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
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

    let temp = this.head;
    do {
      listArray.push(temp.data);
      temp = temp.next;
    } while (temp !== this.head);

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
      console.log('List is empty');
    } else {
      let temp = this.head;
      do {
        console.log(temp.data);
        temp = temp.next;
      } while (temp !== this.head);
    }
  }

  printList() {
    if (this.isEmpty()) {
      console.log('List is empty');
      return;
    }

    let result = '';
    let currentNode = this.head;
    do {
      result += currentNode.data;
      if (currentNode.next !== this.head) {
        result += ' -> ';
      }
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    console.log(result);
  }

  shiftNode() {
    if (this.isEmpty()) {
      console.log('Cannot shift from an empty list');
      return null;
    }

    const node = this.head;
    if (this.getLength() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.length -= 1;
    node.next = null;
    return node;
  }

  unshiftNode(value) {
    const newNode = new CircularSinglyLinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.length += 1;
  }

  pushNode(value) {
    const newNode = new CircularSinglyLinkedListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.length += 1;
  }

  popNode() {
    if (this.isEmpty()) {
      console.log('Cannot pop from an empty list');
      return null;
    }

    if (this.getLength() === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      node.next = null;
      this.length -= 1;
      return node;
    }

    const node = this.tail;
    let temp = this.head;
    while (temp.next !== this.tail) {
      temp = temp.next;
    }

    this.tail = temp;
    this.tail.next = this.head;
    node.next = null;
    this.length -= 1;
    return node;
  }

  insertNode(position, value) {
    if (position < 1 || position > this.length + 1) {
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

    const newNode = new CircularSinglyLinkedListNode(value);
    let temp = this.head;

    for (let i = 1; i < position - 1; i++) {
      temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    this.length += 1;
  }

  removeNode(position) {
    if (position < 1 || position > this.length) {
      console.log('Invalid position');
      return;
    }
    if (this.isEmpty()) {
      console.log('List is empty');
      return null;
    }

    if (position === 1) {
      return this.shiftNode();
    }
    if (position === this.length) {
      return this.popNode();
    }

    let temp = this.head;

    for (let i = 1; i < position - 1; i++) {
      temp = temp.next;
    }

    const removedNode = temp.next;
    temp.next = removedNode.next;
    removedNode.next = null;
    this.length -= 1;

    return removedNode;
  }

  removeNodeByValue(value) {
    if (this.isEmpty()) {
      console.log('List is empty');
      return null;
    }

    if (this.head.data === value) {
      return this.shiftNode();
    }

    if (this.tail.data === value) {
      return this.popNode();
    }

    let temp = this.head;

    do {
      temp = temp.next;
    } while (temp !== this.head && temp.next.data !== value);

    if (temp.next.data === value) {
      const removedNode = temp.next;
      temp.next = temp.next.next;

      removedNode.next = null;
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

    let temp = this.head;
    let index = 0;
    do {
      if (temp.data === value) {
        return index;
      }
      temp = temp.next;
      index += 1;
    } while (temp !== this.head);

    return -1;
  }

  changeNodeValue(index, value) {
    if (index >= this.length || index < 0) {
      console.log('Invalid index');
      return false;
    }
    if (this.isEmpty()) {
      console.log('List is empty');
      return false;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    temp.data = value;
    return true;
  }

  findByIndex(index) {
    if (this.isEmpty() || index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  find(value) {
    if (this.isEmpty()) {
      return null;
    }

    let temp = this.head;
    do {
      if (temp.data === value) {
        return temp;
      }
      temp = temp.next;
    } while (temp !== this.head);

    return null;
  }

  delete() {
    if (this.isEmpty()) {
      console.log('List is already empty. Nothing to delete.');
    } else {
      this.head = null;
      this.tail.next = null;
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
      prev = current;
      current = next;
    } while (current !== this.head);

    this.head = prev;
    this.tail.next = this.head;
  }

  middle() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.length === 1) {
      return this.head;
    }

    let slow = this.head;
    let fast = this.head;

    // Iterate until fast pointer either reaches the end or completes a full circle.
    do {
      slow = slow.next;
      fast = fast.next ? fast.next.next : fast.next; // Ensure that fast.next is not null
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
        current.next = current.next.next;
        this.length -= 1;
      } else {
        visited.add(current.next.data);
        current = current.next;
      }
    }
    this.tail = current;
    this.tail.next = this.head;
  }
}

module.exports = { CircularSinglyLinkedListNode, CircularSinglyLinkedList };

// Test Case 1: Initialization
// const list = new CircularSinglyLinkedList();
// console.log(list.getLength()); // 0
// console.log(list.isEmpty()); // true
// list.traverse(); // "List is empty"

// Test Case 2: Insertion Operations
// Push Operation (Add to the end)
// list.pushNode(10);
// console.log(list.getLength()); // 1
// list.traverse(); // 10

// Unshift Operation (Add to the start)
// list.unshiftNode(5);
// console.log(list.getLength()); // 2
// list.traverse(); // 5 -> 10

// Insert at Specific Position (position = 2)
// list.insertNode(2, 7);
// console.log(list.getLength()); // 3
// list.traverse(); // 5 -> 7 -> 10

// Insert at Invalid Position
// list.insertNode(5, 15); // Invalid position

// Test Case 3: Remove Operations
// Shift Operation (Remove from start)
// const shiftedNode = list.shiftNode();
// console.log(shiftedNode.data); // 5
// console.log(list.getLength()); // 2
// list.traverse(); // 7 -> 10

// Pop Operation (Remove from end)
// const poppedNode = list.popNode();
// console.log(poppedNode.data); // 10
// console.log(list.getLength()); // 1
// list.traverse(); // 7

// Remove at Specific Position (position = 1)
// list.removeNode(1);
// console.log(list.getLength()); // 0
// list.traverse(); // "List is empty"

// Remove Node by Value
// list.pushNode(20);
// list.pushNode(25);
// const removedNode = list.removeNodeByValue(20);
// console.log(removedNode.data); // 20
// list.traverse(); // 25

// Test Case 4: Search Operations
// Contains Value
// list.pushNode(30);
// console.log(list.contains(30)); // true
// console.log(list.contains(40)); // false

// Find Node by Value
// const foundNode = list.find(30);
// console.log(foundNode.data); // 30

// Get Index by Value
// console.log(list.getIndex(30)); // 1
// console.log(list.getIndex(40)); // -1

// Find Node by Index
// console.log(list.findByIndex(0).data); // 25

// Test Case 5: Set and Get Node Value
// Set Node Value at Index
// list.changeNodeValue(0, 35);
// console.log(list.findByIndex(0).data); // 35

// Set Node Value at Invalid Index
// console.log(list.changeNodeValue(1, 40)); // true

// Test Case 6: List Traversal
// Print List
// list.pushNode(40);
// list.printList(); // 35 -> 40 -> 40

// Traverse (directly printing)
// list.traverse(); // 35 -> 40 -> 40

// Test Case 7: Miscellaneous Operations
// Middle Node (Odd length)
// list.pushNode(45);
// console.log(list.middle().data); // 40

// Middle Node (Even length)
// list.unshiftNode(25);
// console.log(list.middle().data); // 40

// Remove Duplicates
// list.pushNode(40); // Adding duplicate
// list.removeDuplicates();
// list.printList(); // 25 -> 35 -> 40 -> 45

// Delete (Clear the entire list)
// list.delete();
// console.log(list.getLength()); // 0
// list.traverse(); // "List is empty"

// Test Case 8: Reverse List
// Reverse an Odd Length List
// list.pushNode(50);
// list.pushNode(55);
// list.reverse();
// list.printList(); // 55 -> 50

// Reverse an Even Length List
// list.pushNode(60);
// list.reverse();
// list.printList(); // 60 -> 55 -> 50

// Reverse an Empty List
// const emptyList = new CircularSinglyLinkedList();
// emptyList.reverse();
// emptyList.traverse(); // "List is empty"

// Test Case 9: Edge Case (Single Node)
// Single Node Operations
// const singleNodeList = new CircularSinglyLinkedList();
// singleNodeList.pushNode(100);
// console.log(singleNodeList.getLength()); // 1
// singleNodeList.traverse(); // 100
// singleNodeList.shiftNode();
// singleNodeList.traverse(); // "List is empty"

// Test Case 10: Complex Operations
// const complexList = new CircularSinglyLinkedList();
// complexList.pushNode(10);
// complexList.pushNode(20);
// complexList.pushNode(30);
// complexList.pushNode(40);
// complexList.removeNodeByValue(20); // Remove value 20
// complexList.insertNode(2, 25); // Insert 25 at position 2
// complexList.printList(); // 10 -> 25 -> 30 -> 40
// complexList.reverse();
// complexList.printList(); // 40 -> 30 -> 25 -> 10

// Test Case 11: Invalid Operations
// Remove from Empty List
// const emptyListForRemove = new CircularSinglyLinkedList();
// emptyListForRemove.shiftNode(); // Cannot shift from an empty list
// emptyListForRemove.popNode(); // Cannot pop from an empty list
// emptyListForRemove.removeNode(1); // Invalid position

// Test Case 12: Invalid Node Insertion
// list.insertNode(10, 99); // Invalid position
// list.changeNodeValue(10, 99); // Invalid index

const list = new CircularSinglyLinkedList();

list.pushNode(1);
list.pushNode(1);
list.pushNode(1);
list.pushNode(1);
list.pushNode(2);
list.pushNode(2);
list.pushNode(2);
list.pushNode(2);
list.pushNode(3);
list.pushNode(3);
list.pushNode(3);
list.pushNode(4);
list.pushNode(4);
list.pushNode(4);
list.pushNode(4);
list.pushNode(4);

list.printList();
list.removeDuplicates();

list.printList();
console.log('Head: ', list.head);
console.log('Tail: ', list.tail);
