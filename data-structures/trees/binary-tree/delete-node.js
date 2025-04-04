const { BinaryTreeNode } = require('./binary-tree');

const deleteBinaryTreeNode = (root, value) => {
  if (!root) {
    console.log('Tree is empty');
    return null;
  }

  // Special case: if the tree has only one node (root) and it's the node to be deleted
  if (root.data === value && !root.left && !root.right) {
    return null; // Tree becomes empty after deletion
  }

  const parentMap = new Map();
  const queue = [];
  let nodeToBeDeleted = null;
  let deepestNode = null;

  queue.push(root);
  parentMap.set(root, null);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode.data === value) {
      nodeToBeDeleted = currentNode;
    }

    if (currentNode.left) {
      parentMap.set(currentNode.left, currentNode);
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      parentMap.set(currentNode.right, currentNode);
      queue.push(currentNode.right);
    }

    if (queue.length === 0) {
      deepestNode = currentNode;
    }
  }

  if (nodeToBeDeleted) {
    if (nodeToBeDeleted !== deepestNode) {
      nodeToBeDeleted.data = deepestNode.data;
    }

    const deepestNodeParent = parentMap.get(deepestNode);
    if (deepestNodeParent) {
      if (deepestNodeParent.left === deepestNode) {
        deepestNodeParent.left = null;
      } else {
        deepestNodeParent.right = null;
      }
    }
  }

  return root;
};
