const { BinaryTreeNode } = require('./binary-tree');

const insertNode = (root, value) => {
  const node = new BinaryTreeNode(value);

  if (!root || !root.data) {
    Object.assign(root, node);
    return;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const treeNode = queue.shift();

    if (treeNode.left) {
      queue.push(treeNode.left);
    } else {
      treeNode.left = node;
      return;
    }

    if (treeNode.right) {
      queue.push(treeNode.right);
    } else {
      treeNode.right = node;
      return;
    }
  }
};
