const { DoublyLinkedList } = require('./doubly-linked-list');

const getListLength = (head) => {
  let count = 0;

  let current = head;
  while (current) {
    count += 1;
    current = current.next;
  }

  return count;
};

const findNthFromLast = (head, position) => {
  if (!head) {
    console.log('List is empty.');
    return null;
  }

  const n = getListLength(head);

  if (n < position || position <= 0) {
    console.log('Invalid node position.');
    return null;
  }

  const positionFromBeginning = n - position + 1;
  let current = head;
  for (let i = 1; i < positionFromBeginning; i++) {
    current = current.next;
  }

  return current.data;
};

const findNthFromLastUsingTwoPointers = (head, position) => {
  if (!head) {
    console.log('List is empty.');
    return null;
  }

  let first = head;
  let second = head;

  // Move `first` pointer `position` steps ahead
  for (let i = 0; i < position; i++) {
    if (!first) {
      console.log('Position exceeds list length.');
      return null;
    }
    first = first.next;
  }

  // Move both pointers one step at a time until `first` reaches the end
  while (first) {
    first = first.next;
    second = second.next;
  }

  return second ? second.data : null;
};

const list = new DoublyLinkedList();

for (let i = 1; i <= 15; i++) {
  list.pushNode(i);
}

list.printList();

console.log(findNthFromLast(list.head, 8));
console.log(findNthFromLast(list.head, 1));
console.log(findNthFromLast(list.head, 15));
console.log(findNthFromLast(list.head, 16));
console.log(findNthFromLast(list.head, -21));
