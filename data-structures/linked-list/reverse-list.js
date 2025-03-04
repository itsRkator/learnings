const { SinglyLinkedList } = require('./linked-list');

const reverse = (head) => {
  if (!head) {
    return head;
  }

  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const list = new SinglyLinkedList();

for (let i = 0; i <= 20; i++) {
  list.pushNode(i);
}

let head = reverse(list.head);
const nodes = [];
while (head) {
  nodes.push(head.data);
  head = head.next;
}
console.log(nodes.join(' -> '));
