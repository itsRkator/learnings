// Breadth First search
const levelOrderTraversalUsingArray = (root) => {
  if (!root) {
    return;
  }

  const queue = [];

  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    console.log(node.data);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};

module.exports = { levelOrderTraversalUsingArray };
