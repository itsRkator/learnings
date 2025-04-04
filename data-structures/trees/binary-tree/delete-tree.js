const deleteBinaryTree = (root) => {
  if (root) {
    root.left = null;
    root.right = null;
    root.data = null;
  }

  return null;
};
