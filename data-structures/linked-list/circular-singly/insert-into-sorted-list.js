const {
  CircularSinglyLinkedListNode,
  CircularSinglyLinkedList,
} = require('./circular-linked-list');

const insertInSorted = (head, value) => {
  const newNode = new CircularSinglyLinkedListNode(value);

  if (!head) {
    // If the list is empty, create the node and point it to itself.
    head = newNode;
    newNode.next = head;
  } else if (head.data >= value) {
    // If value is smaller than the head node's value, insert at the beginning.
    let temp = head;
    // Traverse the list to find the last node.
    while (temp.next !== head) {
      temp = temp.next;
    }
    // Insert the new node and update head.
    newNode.next = head;
    head = newNode;
    temp.next = head; // Update the last node's next pointer to point to new head.
  } else {
    // Find the appropriate insertion point.
    let temp = head;
    while (temp.next !== head && temp.next.data < value) {
      temp = temp.next;
    }
    // Insert the new node.
    newNode.next = temp.next;
    temp.next = newNode;
  }

  return head;
};

const circularLinkedList = new CircularSinglyLinkedList();

circularLinkedList.pushNode(1);
circularLinkedList.pushNode(2);
circularLinkedList.pushNode(3);
circularLinkedList.pushNode(4);
circularLinkedList.pushNode(5);
circularLinkedList.pushNode(6);

const listHead = insertInSorted(circularLinkedList.head, -5);

const printCircularList = (head) => {
  if (!head) return;
  let temp = head;
  let listString = '';
  do {
    listString += temp.data;
    if (temp.next !== head) {
      listString += ' -> ';
    }
    temp = temp.next;
  } while (temp !== head);

  return listString;
};

console.log(printCircularList(listHead));
