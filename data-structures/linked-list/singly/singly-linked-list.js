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

  toArray() {
    const listArray = [];

    if (this.isEmpty()) {
      return listArray;
    }

    let temp = this.head;
    while (temp) {
      listArray.push(temp.data);
      temp = temp.next;
    }

    return listArray;
  }

  contains(value) {
    if (this.isEmpty()) {
      return false;
    }

    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }

    return false;
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
      console.log('List is empty');
      return;
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
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return node;
    }

    // For lists with more than one node
    const node = this.tail;
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

    const newNode = new SinglyLinkedListNode(value);
    let temp = this.head;

    // Traverse to the node before the desired position
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
      index += 1;
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

    if (this.length === 1) {
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

    if (this.length === 1) {
      return this.head;
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
    if (this.isEmpty()) {
      return;
    }

    const visited = new Set();
    let current = this.head;
    visited.add(this.head.data);

    while (current.next) {
      if (visited.has(current.next.data)) {
        current.next = current.next.next;
        this.length -= 1;
      } else {
        visited.add(current.next.data);
        current = current.next;
      }
    }
    this.tail = current;
  }
}

module.exports = { SinglyLinkedListNode, SinglyLinkedList };

// // Test cases
// const list = new SinglyLinkedList();

// // 1. Test isEmpty() method
// console.log('1. Test isEmpty: ', list.isEmpty()); // Expected: true

// // 2. Test pushNode() to add elements to the list
// list.pushNode(10);
// list.pushNode(20);
// list.pushNode(30);
// console.log('2. List after pushNode(10), pushNode(20), pushNode(30):');
// list.printList(); // Expected: 10 -> 20 -> 30

// // 3. Test getLength() method
// console.log('3. Length of list after pushing nodes: ', list.getLength()); // Expected: 3

// // 4. Test contains() method
// console.log('4. Test contains(20): ', list.contains(20)); // Expected: true
// console.log('5. Test contains(40): ', list.contains(40)); // Expected: false

// // 5. Test toArray() method
// console.log('6. Convert list to array: ', list.toArray()); // Expected: [10, 20, 30]

// // 6. Test shiftNode() method (removes the first node)
// console.log('7. Shift Node: ', list.shiftNode().data); // Expected: 10
// console.log('8. List after shifting node:');
// list.printList(); // Expected: 20 -> 30

// // 7. Test unshiftNode() method (adds a node at the beginning)
// list.unshiftNode(5);
// console.log('9. List after unshiftNode(5):');
// list.printList(); // Expected: 5 -> 20 -> 30

// // 8. Test popNode() method (removes the last node)
// console.log('10. Pop Node: ', list.popNode().data); // Expected: 30
// console.log('11. List after popping node:');
// list.printList(); // Expected: 5 -> 20

// // 9. Test insertNode() method (inserts node at specific position)
// list.insertNode(2, 15);
// console.log('12. List after insertNode(2, 15):');
// list.printList(); // Expected: 5 -> 15 -> 20

// // 10. Test removeNode() method (removes node at specific position)
// list.removeNode(2); // Remove node at position 2 (15)
// console.log('13. List after removeNode(2):');
// list.printList(); // Expected: 5 -> 20

// // 11. Test removeNodeByValue() method
// list.removeNodeByValue(5);
// console.log('14. List after removeNodeByValue(5):');
// list.printList(); // Expected: 20

// // 12. Test getIndex() method
// console.log('15. Get Index of 20: ', list.getIndex(20)); // Expected: 0
// console.log('16. Get Index of 100: ', list.getIndex(100)); // Expected: -1

// // 13. Test setNodeValue() method
// console.log(
//   '17. Set node value at index 0 to 100: ',
//   list.setNodeValue(0, 100)
// ); // Expected: true
// console.log('18. List after setNodeValue(0, 100):');
// list.printList(); // Expected: 100

// // 14. Test findByIndex() method
// console.log('19. Find node by index 0: ', list.findByIndex(0).data); // Expected: 100
// console.log('20. Find node by index 1: ', list.findByIndex(1)); // Expected: null (invalid index)

// // 15. Test find() method
// console.log('21. Find node by value 100: ', list.find(100).data); // Expected: 100
// console.log('22. Find node by value 200: ', list.find(200)); // Expected: null

// // 16. Test delete() method (clears the list)
// list.delete(); // Clear the list
// console.log('23. List after delete() method:');
// list.printList(); // Expected: List is empty

// // 17. Test reverse() method (should reverse the list)
// list.pushNode(1);
// list.pushNode(2);
// list.pushNode(3);
// console.log('24. List before reverse:');
// list.printList(); // Expected: 1 -> 2 -> 3
// list.reverse();
// console.log('25. List after reverse:');
// list.printList(); // Expected: 3 -> 2 -> 1

// // 18. Test middle() method (should return the middle node)
// console.log('26. Middle node of the list: ', list.middle().data); // Expected: 2 (middle node in 3 -> 2 -> 1)

// // 19. Test removeDuplicates() method
// const listWithDuplicates = new SinglyLinkedList();
// listWithDuplicates.pushNode(10);
// listWithDuplicates.pushNode(10);
// listWithDuplicates.pushNode(20);
// listWithDuplicates.pushNode(20);
// listWithDuplicates.pushNode(30);
// listWithDuplicates.pushNode(30);
// console.log('27. List with duplicates:');
// listWithDuplicates.printList(); // Expected: 10 -> 10 -> 20 -> 20 -> 30 -> 30
// listWithDuplicates.removeDuplicates();
// console.log('28. List after removeDuplicates:');
// listWithDuplicates.printList(); // Expected: 10 -> 20 -> 30
