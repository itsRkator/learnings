const {
  SinglyLinkedList,
  SinglyLinkedListNode,
} = require('./singly-linked-list');

// Merge two sorted linked lists (h1 and h2) in-place.
const mergeTwoListInOne = (h1, h2) => {
  if (!h1) return h2;
  if (!h2) return h1;

  let temp1 = h1;
  let temp2 = h2;

  // Ensure h1 is always the smaller head
  if (temp1.data > temp2.data) {
    [temp1, temp2] = [temp2, temp1];
  }

  while (temp1.next && temp2) {
    if (temp1.next.data > temp2.data) {
      const next = temp1.next; // Save temp1.next
      temp1.next = temp2; // Connect temp1 to temp2
      temp2 = temp2.next; // Move temp2 to the next node
      temp1.next.next = next; // Link the remaining nodes of h1
    }
    temp1 = temp1.next;
  }

  // If there are remaining nodes in h2, link them
  if (temp2) {
    temp1.next = temp2;
  }

  return h1;
};

// Merge two sorted linked lists into a new linked list.
const mergeLinkedLists = (h1, h2) => {
  const newLinkedList = new SinglyLinkedList();
  while (h1 && h2) {
    if (h1.data <= h2.data) {
      newLinkedList.pushNode(h1.data);
      h1 = h1.next;
    } else {
      newLinkedList.pushNode(h2.data);
      h2 = h2.next;
    }
  }
  while (h1) {
    newLinkedList.pushNode(h1.data);
    h1 = h1.next;
  }
  while (h2) {
    newLinkedList.pushNode(h2.data);
    h2 = h2.next;
  }

  return newLinkedList;
};

// Standard approach for merging two sorted linked lists.
const mergeListsStandard = (h1, h2) => {
  let preHead = new SinglyLinkedListNode(-1);
  let prev = preHead;

  while (h1 && h2) {
    if (h1.data <= h2.data) {
      prev.next = h1;
      h1 = h1.next;
    } else {
      prev.next = h2;
      h2 = h2.next;
    }
    prev = prev.next;
  }

  prev.next = h1 !== null ? h1 : h2;
  return preHead.next;
};

// Create two linked lists
let list1 = new SinglyLinkedList();
let list2 = new SinglyLinkedList();

// Populate the lists with sample data
for (let i = 1; i <= 5; i++) {
  list1.pushNode(i);
  list2.pushNode(i * 2);
}

console.log('List 1:');
list1.printList();
console.log('List 2:');
list2.printList();

// Merge using mergeLists
console.log('Merged List (mergeLists):');
const mergedList = mergeLinkedLists(list1.head, list2.head);
mergedList.printList();

// Merge using mergeTwoListInOne
console.log('Merged List (mergeTwoListInOne):');
list1 = new SinglyLinkedList();
list2 = new SinglyLinkedList();

// Populate the lists with sample data
for (let i = 1; i <= 5; i++) {
  list1.pushNode(i);
  list2.pushNode(i * 2);
}
mergeTwoListInOne(list1.head, list2.head);
list1.printList();

// Merge using mergeListsStandard
console.log('Merged List (mergeListsStandard):');
list1 = new SinglyLinkedList();
list2 = new SinglyLinkedList();

// Populate the lists with sample data
for (let i = 1; i <= 5; i++) {
  list1.pushNode(i);
  list2.pushNode(i * 2);
}
const mergedStandard = mergeListsStandard(list1.head, list2.head);
const nodes = [];

let tempHead = mergedStandard;
while (tempHead) {
  nodes.push(tempHead.data);
  tempHead = tempHead.next;
}
console.log(nodes.join(' -> '));
