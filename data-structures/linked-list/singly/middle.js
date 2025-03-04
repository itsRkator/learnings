// Import the SinglyLinkedList class from the correct file
const { SinglyLinkedList } = require('./singly-linked-list');

/**
 * Function to find the middle node of a singly linked list.
 * Uses the slow and fast pointer technique.
 *
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The middle node of the linked list.
 */
const middle = (head) => {
  if (!head) {
    return head; // If the list is empty, return null
  }

  let slow = head; // Slow pointer moves one step at a time
  let fast = head; // Fast pointer moves two steps at a time

  // Traverse the list until fast pointer reaches the end
  while (fast && fast.next) {
    slow = slow.next; // Move slow one step
    fast = fast.next.next; // Move fast two steps
  }

  return slow; // Slow pointer will be at the middle when fast reaches the end
};

// Create a new singly linked list
const list = new SinglyLinkedList();

for (let i = 1; i < 10; i++) {
  list.pushNode(i); // Add nodes with values 1 to 9
}

list.printList(); // Print the entire linked list

// Find and print the value of the middle node
console.log(middle(list.head)?.data); // Use optional chaining to avoid errors if list is empty
