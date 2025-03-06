const { CircularSinglyLinkedList } = require('./circular-linked-list');

const isListSorted = (head) => {
  if (!head) {
    return true;
  }

  let temp = head;
  while (temp.next !== head) {
    if (temp.data > temp.next.data) {
      return false;
    }
    temp = temp.next;
  }

  return true;
};

const circularLinkedList = new CircularSinglyLinkedList();

circularLinkedList.pushNode(0);
circularLinkedList.pushNode(1);
circularLinkedList.pushNode(2);
circularLinkedList.pushNode(3);
circularLinkedList.pushNode(1);
circularLinkedList.pushNode(5);
circularLinkedList.pushNode(6);

const isSorted = isListSorted(circularLinkedList.head);

console.log(isSorted);
