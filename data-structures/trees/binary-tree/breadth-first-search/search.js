const { BinaryTreeNode } = require('../binary-tree');

const search = (root, value) => {
  if (!root) {
    console.log("Node doesn't exist.");
    return null;
  }

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const treeNode = queue.shift();
    if (treeNode.data === value) {
      return treeNode;
    }

    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }

  return null;
};

// Test Case
// const root = new BinaryTreeNode(10);
// root.left = new BinaryTreeNode(5);
// root.right = new BinaryTreeNode(15);
// root.left.left = new BinaryTreeNode(3);
// root.left.right = new BinaryTreeNode(7);
// root.right.left = new BinaryTreeNode(12);
// root.right.right = new BinaryTreeNode(20);
// let result = search(root, 7);
// console.log(
//   result ? `Found node with value: ${result.data}` : 'Node not found'
// );
// let newResult = search(root, 10);
// console.log(
//   result ? `Found node with value: ${newResult.data}` : 'Node not found'
// );

// Search for a non-existing value (e.g., 99)
// result = search(root, 99);
// console.log(
//   result ? `Found node with value: ${result.data}` : 'Node not found'
// );
