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
    } else {
      let current = this.tail;
      do {
        console.log(current.data);
        current = current.prev;
      } while (current !== this.tail);
    }
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

  insertNode(position, value) {}
}

const list = new CircularDoublyLinkedList();

list.pushNode(10);

list.printList();
console.log('Output 1', list.popNode());
console.log('Output 7', list.shiftNode());
console.log('Output 8', list.length);
list.printList();
console.log(list.head);
console.log(list.tail);
