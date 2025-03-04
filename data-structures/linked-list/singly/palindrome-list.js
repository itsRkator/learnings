const { SinglyLinkedList } = require('./singly-linked-list');

const isLinkedListPalindrome = (head) => {
  if (!head || !head.next) return true; // Empty or single-node list is always a palindrome.

  // Step 1: Use slow & fast pointers to find the middle
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let prev = null;
  let current = slow;
  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  // Step 3: Compare the two halves
  let left = head;
  let right = prev; // right now points to the head of the reversed second half
  while (right) {
    if (left.data !== right.data) return false;
    left = left.next;
    right = right.next;
  }

  return true;
};

// Create a palindromic linked list: 1 -> 2 -> 3 -> 2 -> 1
const list = new SinglyLinkedList();
list.pushNode(1);
list.pushNode(2);
list.pushNode(3);
list.pushNode(3);
list.pushNode(1);

list.printList();
console.log(isLinkedListPalindrome(list.head)); // true
