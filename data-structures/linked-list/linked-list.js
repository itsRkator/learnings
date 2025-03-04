class SinglyLinkedListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  getLength() {
    return this.length;
  }

  traverse() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let temp = this.head;
      while (temp) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }

  printList() {
    if (this.isEmpty()) {
      return 'List is empty';
    }

    let result = '';
    let currentNode = this.head;
    while (currentNode) {
      result += currentNode.data;
      if (currentNode.next) {
        result += ' -> '; // Add separator between nodes
      }
      currentNode = currentNode.next;
    }
    console.log(result);
  }

  shiftNode() {
    if (this.isEmpty()) {
      console.log('Cannot shift from an empty list');
      return null;
    }

    // Handle special case when there's only one node
    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return node;
    }

    // For lists with more than one node
    let node = this.head;
    this.head = this.head.next;
    node.next = null; // Avoid memory leak in large lists
    this.length -= 1;

    return node;
  }

  unshiftNode(nodeValue) {
    const newNode = new SinglyLinkedListNode(nodeValue);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  pushNode(nodeValue) {
    const newNode = new SinglyLinkedListNode(nodeValue);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  popNode() {
    if (this.isEmpty()) {
      console.log('Cannot pop from an empty list');
      return null;
    }

    // Handle special case when there's only one node
    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return node;
    }

    // For lists with more than one node
    let node = this.tail;
    let temp = this.head;

    // Traverse to find the second-to-last node (optimized to stop at second-to-last node)
    while (temp.next !== this.tail) {
      temp = temp.next;
    }

    this.tail = temp;
    this.tail.next = null;
    this.length -= 1;

    node.next = null; // Avoid memory leak in large lists
    return node;
  }

  // Insert a new node at a specific position (1-based index)
  insertNode(position, value) {
    if (position < 1 || position > this.length + 1) {
      console.log('Invalid position');
      return;
    }

    const newNode = new SinglyLinkedListNode(value);

    // Insert at the beginning
    if (position === 1) {
      this.unshiftNode(value);
      return;
    }

    // Insert at the end
    if (position === this.length + 1) {
      this.pushNode(value);
      return;
    }

    let temp = this.head;

    // Traverse to the node before the desired position
    for (let i = 0; i < position - 1; i++) {
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
    temp.next = removedNode.next; // Remove the node from the list
    removedNode.next = null; // Detach the node
    this.length -= 1;
    return removedNode;
  }

  removeNodeByValue(value) {
    if (this.isEmpty()) {
      console.log('List is empty');
      return null;
    }

    // Check if the value is at the head
    if (this.head.data === value) {
      return this.shiftNode();
    }

    // Check if the value is at the tail
    if (this.tail.data === value) {
      return this.popNode();
    }

    let temp = this.head;

    // Traverse the list to find the node
    while (temp.next && temp.next.data !== value) {
      temp = temp.next;
    }

    // If the value is found
    if (temp.next) {
      const nodeToRemove = temp.next;
      temp.next = temp.next.next; // Remove the node

      nodeToRemove.next = null; // Detach the node from the list
      this.length -= 1;
      return nodeToRemove;
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
    while (temp) {
      if (temp.data === value) {
        return index;
      }
      temp = temp.next;
    }
    return -1;
  }

  setNodeValue(index, value) {
    if (this.isEmpty() || index >= this.length || index < 0) {
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
    if (this.isEmpty() || index >= this.length || index < 0) {
      return null;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  find(value) {
    if (this.isEmpty()) {
      return null;
    }
    let temp = this.head;
    while (temp) {
      if (temp.data === value) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  delete() {
    if (this.isEmpty()) {
      console.log('List is already empty. Nothing to delete.');
    } else {
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

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  middle() {
    if (this.isEmpty()) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  removeDuplicates() {
    const visited = new Set();
    let current = this.head;
    visited.add(this.head.data);

    while (current.next) {
      if (visited.has(current.next.data)) {
        current.next = current.next.next;
        this.length -= 1;
      } else {
        current = current.next;
        visited.add(current.data);
      }
    }
    this.tail = current;
  }
}

module.exports = { SinglyLinkedListNode, SinglyLinkedList };

// Test Cases
// const list = new SinglyLinkedList();
// list.pushNode(1);
// list.pushNode(11);
// list.pushNode(2);
// list.pushNode(12);
// list.pushNode(12);
// list.pushNode(22);
// list.pushNode(24);
// list.unshiftNode(3);
// console.log(list.shiftNode());
// console.log(list.popNode());
// list.insertNode(1, 10);
// list.insertNode(2, 30);
// list.insertNode(4, 40);
// list.insertNode(4, 40);
// console.log(list.removeNode(4));
// console.log(list.removeNodeByValue(2));
// list.insertNode(1, 3);
// list.insertNode(2, 5);
// list.insertNode(4, 19);
// list.insertNode(4, 7);
// list.setNodeValue(3, 3000);
// list.printList();
// list.removeDuplicates();
// list.printList();
