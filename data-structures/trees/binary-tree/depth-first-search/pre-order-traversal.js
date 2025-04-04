// Depth First search
const preOrderTraversal = (root) => {
  if (!root) {
    return;
  }

  console.log(root.data);

  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
};

module.exports = { preOrderTraversal };
