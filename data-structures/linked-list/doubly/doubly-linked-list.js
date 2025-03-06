class DoublyLinkedListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

    let current = this.head;
    while (current) {
      listArray.push(current.data);
      current = current.next;
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
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  printList() {
    if (this.isEmpty()) {
      console.log('List is Empty');
      return;
    }

    let listString = '';
    let current = this.head;
    while (current) {
      listString += current.data;
      if (current.next) {
        listString += ' -> ';
      }
      current = current.next;
    }
    console.log(listString);
  }

  // shiftNode (remove head) method
  shiftNode() {
    if (this.isEmpty()) {
      console.log('Cannot shift from an empty list');
      return null;
    }

    const node = this.head;

    if (this.length === 1) {
      // If there's only one node, reset the list to empty
      this.head = null;
      this.tail = null;
    } else {
      // Shift from the head and update head pointer
      this.head = this.head.next;
      this.head.prev = null;
    }

    // Nullify the pointers of the removed node
    node.next = null;
    node.prev = null;

    this.length -= 1;

    return node;
  }

  // Adds a new node with the specified value to the beginning (front) of the doubly linked list.
  unshiftNode(value) {
    // Create a new node with the provided value
    const node = new DoublyLinkedListNode(value);

    // Check if the list is empty (no nodes exist yet)
    if (this.isEmpty()) {
      // If the list is empty, the new node becomes both the head and the tail
      this.head = node;
      this.tail = node;
    } else {
      // If the list is not empty, insert the new node at the front
      node.next = this.head; // Point the new node's next to the current head
      this.head.prev = node; // Point the current head's prev to the new node
      this.head = node; // Update the head to be the new node
    }

    // Increment the length of the list
    this.length++;
  }
}
