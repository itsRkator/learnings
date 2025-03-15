// Node class for a Doubly Linked List
class DoublyLinkedListNode {
  constructor(value) {
    this.data = value; // Node's data
    this.next = null; // Pointer to the next node
    this.prev = null; // Pointer to the previous node
  }
}

// Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null; // Pointer to the head of the list
    this.tail = null; // Pointer to the tail of the list
    this.length = 0; // Length of the list
  }

  // Check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the length of the list
  getLength() {
    return this.length;
  }

  // Convert the linked list to an array
  toArray() {
    const listArray = [];
    let current = this.head;

    // Traverse the list and push each node's data to the array
    while (current) {
      listArray.push(current.data);
      current = current.next;
    }

    return listArray;
  }

  // Check if the list contains a node with a specific value
  contains(value) {
    if (this.isEmpty()) {
      return false;
    }

    let current = this.head;

    // Traverse the list to find the value
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Traverse the list and log the data of each node
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Reverse traverse the list and log the data of each node
  reverseTraverse() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  // Print the list as a string (e.g., 1 -> 2 -> 3)
  printList() {
    if (this.isEmpty()) {
      console.log('List is Empty');
      return;
    }

    let listString = '';
    let current = this.head;

    // Traverse the list to build the string representation
    while (current) {
      listString += current.data;
      if (current.next) {
        listString += ' <--> '; // Add separator between nodes
      }
      current = current.next;
    }
    console.log(listString);
  }

  // Shift (remove) the head node from the list
  shiftNode() {
    if (this.isEmpty()) {
      console.log('Cannot shift from an empty list');
      return null;
    }

    const node = this.head;

    // If there is only one node, reset the list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update head to point to the next node
      this.head = this.head.next;
      this.head.prev = null;
    }

    // Nullify the pointers of the removed node
    node.next = null;
    node.prev = null;

    // Decrease the length of the list
    this.length -= 1;

    return node;
  }

  // Unshift (add) a node at the front of the list
  unshiftNode(value) {
    const node = new DoublyLinkedListNode(value);

    if (this.isEmpty()) {
      // If the list is empty, the new node becomes both the head and tail
      this.head = node;
      this.tail = node;
    } else {
      // Insert the new node at the front of the list
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    // Increase the length of the list
    this.length++;
  }

  // Push a new node to the end (tail) of the list
  pushNode(value) {
    const node = new DoublyLinkedListNode(value);

    if (this.isEmpty()) {
      // If the list is empty, the new node becomes both the head and tail
      this.head = node;
      this.tail = node;
    } else {
      // Insert the new node at the end of the list
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    // Increase the length of the list
    this.length += 1;
  }

  // Pop (remove) the tail node from the list
  popNode() {
    if (this.isEmpty()) {
      console.log('Cannot pop from an empty list');
      return null;
    }

    const node = this.tail;

    if (this.length === 1) {
      // If there's only one node, reset the list to empty
      this.head = null;
      this.tail = null;
    } else {
      // Update the tail to the previous node
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    // Nullify the pointers of the removed node
    node.next = null;
    node.prev = null;

    // Decrease the length of the list
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

    const node = new DoublyLinkedListNode(value);

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
    if (position < 1 || position > this.length) {
      console.log('Invalid position');
      return null;
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
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
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
    console.log('Value not found');
    return null;
  }

  getIndex(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }

  changeNodeValue(index, value) {
    if (this.isEmpty() || index < 0 || index >= this.length) {
      return false;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.data = value;
    return true;
  }

  findNodeByIndex(index) {
    if (this.isEmpty() || index >= this.length || index < 0) {
      return null;
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
    while (current) {
      if (current.data === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  delete() {
    if (this.isEmpty()) {
      console.log('List is already empty. Nothing to delete.');
      return;
    }

    let current = this.head;

    // Traverse through the list and remove references
    while (current) {
      let nextNode = current.next; // Save reference to next node
      current.prev = null;
      current.next = null;
      current = nextNode; // Move to next node
    }

    // Reset list properties
    this.head = null;
    this.tail = null;
    this.length = 0;

    console.log('List has been cleared.');
  }

  reverse() {
    if (this.isEmpty() || this.length === 1) {
      return;
    }

    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  middle() {
    // Return null if the list is empty
    if (this.isEmpty()) {
      return null;
    }

    // If the list has only one element, return the head (middle node)
    if (this.length === 1) {
      return this.head;
    }

    // Initialize slow and fast pointers at the head of the list
    let slow = this.head;
    let fast = this.head;

    // Traverse the list using slow and fast pointers
    while (fast && fast.next) {
      slow = slow.next; // Slow pointer moves one step
      fast = fast.next.next; // Fast pointer moves two steps
    }

    // The slow pointer is now at the middle of the list
    return slow;
  }

  removeDuplicates() {
    if (this.isEmpty()) {
      return;
    }

    const visited = new Set();
    let current = this.head;

    visited.add(current.data);

    while (current.next) {
      if (visited.has(current.next.data)) {
        const removedNode = current.next;
        current.next = removedNode.next;

        // Handle the case where the removed node is the tail
        if (removedNode.next) {
          removedNode.next.prev = current;
        } else {
          // If it's the last node, update the tail
          this.tail = current;
        }

        this.length -= 1;
        removedNode.next = null;
        removedNode.prev = null;
      } else {
        visited.add(current.next.data);
        current = current.next;
      }
    }
  }
}

module.exports = { DoublyLinkedListNode, DoublyLinkedList };

// Test Cases for Doubly Linked List

// Create a new DoublyLinkedList instance
// const list = new DoublyLinkedList();

// Test 1: Check if the list is empty
// console.log('Test 1: Is the list empty?');
// console.log(list.isEmpty()); // Expected: true
// console.log('');

// Test 2: Push nodes to the end of the list
// console.log('Test 2: Push nodes to the end of the list.');
// list.pushNode(1); // Add 1 to the end
// list.pushNode(2); // Add 2 to the end
// list.pushNode(3); // Add 3 to the end
// list.printList(); // Expected: 1 -> 2 -> 3
// console.log('');

// Test 3: Unshift node to the front of the list
// console.log('Test 3: Unshift node to the front of the list.');
// list.unshiftNode(0); // Add 0 to the front
// list.printList(); // Expected: 0 -> 1 -> 2 -> 3
// console.log('');

// Test 4: Remove node from the front (shiftNode)
// console.log('Test 4: Remove node from the front (shiftNode).');
// list.shiftNode(); // Remove 0 from the front
// list.printList(); // Expected: 1 -> 2 -> 3
// console.log('');

// Test 5: Pop node from the end (popNode)
// console.log('Test 5: Pop node from the end (popNode).');
// list.popNode(); // Remove 3 from the end
// list.printList(); // Expected: 1 -> 2
// console.log('');

// Test 6: Insert node at a specific position
// console.log('Test 6: Insert node at position 2.');
// list.insertNode(2, 4); // Insert 4 at position 2
// list.printList(); // Expected: 1 -> 4 -> 2
// console.log('');

// Test 7: Remove node by position
// console.log('Test 7: Remove node at position 2.');
// list.removeNode(2); // Remove node at position 2 (node with value 4)
// list.printList(); // Expected: 1 -> 2
// console.log('');

// Test 8: Remove node by value
// console.log('Test 8: Remove node by value.');
// list.removeNodeByValue(2); // Remove node with value 2
// list.printList(); // Expected: 1
// console.log('');

// Test 9: Check if a value exists in the list
// console.log('Test 9-A: Check if the list contains value 1.');
// console.log(list.contains(1)); // Expected: true
// console.log('Test 9-B: Check if the list contains value 2.');
// console.log(list.contains(2)); // Expected: false
// console.log('');

// Test 10: Get index of a value
// console.log('Test 10-A: Get the index of value 1.');
// console.log(list.getIndex(1)); // Expected: 0
// console.log('Test 10-B: Get the index of value 2.');
// console.log(list.getIndex(2)); // Expected: -1
// console.log('');

// Test 11: Change node value by index
// console.log('Test 11: Change node value at index 0 to 10.');
// list.changeNodeValue(0, 10); // Change node at index 0 (value 1) to 10
// list.printList(); // Expected: 10
// console.log('');

// Test 12: Find node by index
// console.log('Test 12: Find node by index 0.');
// const nodeAtIndex = list.findNodeByIndex(0);
// console.log(nodeAtIndex ? nodeAtIndex.data : null); // Expected: 10
// console.log('');

// Test 13: Find node by value
// console.log('Test 13: Find node by value 10.');
// const nodeByValue = list.find(10);
// console.log(nodeByValue ? nodeByValue.data : null); // Expected: 10
// console.log('');

// Test 14: Reverse the list
// console.log('Test 14: Reverse the list.');
// list.pushNode(2); // Add 2 to the list
// list.pushNode(3); // Add 3 to the list
// list.printList(); // Expected: 10 -> 2 -> 3
// list.reverse(); // Reverse the list
// list.printList(); // Expected: 3 -> 2 -> 10
// console.log('');

// Test 15: Middle of the list
// console.log('Test 15: Find middle node of the list.');
// console.log(list.middle().data); // Expected: 2 (middle of 3 -> 2 -> 10)
// console.log('');

// Test 16: Remove duplicates from the list
// console.log('Test 16: Remove duplicates from the list.');
// list.pushNode(3); // Add duplicate 3
// list.pushNode(2); // Add duplicate 2
// list.printList(); // Expected: 3 -> 2 -> 10 -> 3 -> 2
// list.removeDuplicates(); // Remove duplicates
// list.printList(); // Expected: 3 -> 2 -> 10
// console.log('');

// Test 17: Delete the entire list
// console.log('Test 17: Delete the entire list.');
// list.delete(); // Delete all nodes
// list.printList(); // Expected: List is Empty
// console.log('');

// Test 18: Try removing from an empty list
// console.log('Test 18: Try removing from an empty list.');
// list.shiftNode(); // Expected: Cannot shift from an empty list
// list.popNode(); // Expected: Cannot pop from an empty list
// list.removeNodeByValue(10); // Expected: List is empty
// list.printList(); // Expected: List is Empty
