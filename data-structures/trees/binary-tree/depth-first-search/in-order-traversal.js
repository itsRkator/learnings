// Depth First search
const inOrderTraversal = (root) => {
  if (!root) {
    return;
  }

  inOrderTraversal(root.left);

  console.log(root.data);

  inOrderTraversal(root.right);
};

module.exports = { inOrderTraversal };
