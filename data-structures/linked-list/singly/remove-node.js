const { SinglyLinkedList } = require('./singly-linked-list');

const removeNodeByValue = (head, value) => {
  if (!head) {
    return head;
  }
  if (head.data === value) {
    return head.next; // Move head to the next node
  }

  let temp = head;

  // Traverse the list to find the node
  while (temp.next && temp.next.data !== value) {
    temp = temp.next;
  }

  // If the value is found, remove the node
  if (temp.next) {
    temp.next = temp.next.next;
  }

  return head; // Always return head
};

const list = new SinglyLinkedList();

for (let i = 0; i <= 20; i++) {
  list.pushNode(i);
}

let head = removeNodeByValue(list.head, 13);
const nodes = [];
while (head) {
  nodes.push(head.data);
  head = head.next;
}
console.log(nodes.join(' -> '));
