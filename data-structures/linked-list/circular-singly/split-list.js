const {
  CircularSinglyLinkedListNode,
  CircularSinglyLinkedList,
} = require('./circular-linked-list');

const getCircularLinkedListLength = (head) => {
  let count = 0;
  let temp = head;
  do {
    count += 1;
    temp = temp.next;
  } while (temp !== head);

  return count;
};

const splitCircularLinkedListToEqualHalf = (head) => {
  if (!head) {
    console.log('Cannot split empty list');
    return [null, null];
  }

  const listLength = getCircularLinkedListLength(head);

  const mid = Math.ceil(listLength / 2);

  let firstListHead = new CircularSinglyLinkedListNode(null);
  let secondListHead = new CircularSinglyLinkedListNode(null);
  let firstListTemp = firstListHead;
  let secondListTemp = secondListHead;

  let temp = head;

  for (let i = 1; i <= listLength; i++) {
    if (i <= mid) {
      firstListTemp.next = new CircularSinglyLinkedListNode(temp.data);
      firstListTemp = firstListTemp.next;
    } else {
      secondListTemp.next = new CircularSinglyLinkedListNode(temp.data);
      secondListTemp = secondListTemp.next;
    }
    temp = temp.next;
  }

  firstListHead = firstListHead.next;
  secondListHead = secondListHead.next;

  firstListTemp.next = firstListHead;
  secondListTemp.next = secondListHead;

  return [firstListHead, secondListHead];
};

const circularLinkedList = new CircularSinglyLinkedList();

circularLinkedList.pushNode(1);
circularLinkedList.pushNode(2);
circularLinkedList.pushNode(3);
circularLinkedList.pushNode(4);
circularLinkedList.pushNode(5);
circularLinkedList.pushNode(6);

const [firstList, secondList] = splitCircularLinkedListToEqualHalf(
  circularLinkedList.head
);

// Helper function to print the circular list
const printCircularList = (head) => {
  if (!head) return;
  let temp = head;
  
  do {
    console.log(temp.data);
    temp = temp.next;
  } while (temp !== head);
};

console.log('First Half:');
printCircularList(firstList);
console.log('Second Half:');
printCircularList(secondList);
