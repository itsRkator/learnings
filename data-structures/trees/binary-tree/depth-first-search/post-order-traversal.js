// Depth First search
const postOrderTraversal = (root) => {
  if (!root) {
    return;
  }

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);

  console.log(root.data);
};

module.exports = { postOrderTraversal };
