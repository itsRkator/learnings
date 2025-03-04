const { SinglyLinkedList } = require('./linked-list');

// Function to remove duplicates from a sorted linked list
const removeDuplicatesFromSortedLinkedList = (head) => {
  let temp = head;
  while (temp && temp.next) {
    if (temp.data === temp.next.data) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

// Function to remove duplicates from an unsorted linked list
const removeDuplicatesFromUnsortedLinkedList = (head) => {
  const visited = new Set();
  let current = head;

  // Add the first node's data to the visited set
  visited.add(current.data);

  while (current && current.next) {
    if (visited.has(current.next.data)) {
      current.next = current.next.next; // Skip the duplicate node
    } else {
      current = current.next; // Move to the next node
      visited.add(current.data);
    }
  }
  return head;
};

// Test case for sorted linked list
const list1 = new SinglyLinkedList();
list1.pushNode(1);
list1.pushNode(2);
list1.pushNode(3);
list1.pushNode(3);
list1.pushNode(4);
list1.pushNode(5);
list1.pushNode(6);
list1.pushNode(7);
list1.pushNode(7);
list1.pushNode(8);

// Test case for unsorted linked list
const list2 = new SinglyLinkedList();
list2.pushNode(2);
list2.pushNode(1);
list2.pushNode(6);
list2.pushNode(4);
list2.pushNode(5);
list2.pushNode(3);
list2.pushNode(2);
list2.pushNode(3);

// Print the original lists
console.log('Original Sorted List:');
list1.printList();
console.log('Original Unsorted List:');
list2.printList();

// Remove duplicates from both lists
console.log('After Removing Duplicates from Sorted List:');
list1.head = removeDuplicatesFromSortedLinkedList(list1.head);
list1.printList();

console.log('After Removing Duplicates from Unsorted List:');
list2.head = removeDuplicatesFromUnsortedLinkedList(list2.head);
list2.printList();
