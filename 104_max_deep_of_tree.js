// leetcode 通过
var root = {};
var maxDepth = function(root) {
  if (!root) return 0;
  function recursive (tree, deep) {
    var leftDeep = tree.left && recursive(tree.left, deep+1) || deep;
    var rightDeep = tree.right && recursive(tree.right, deep+1) || deep;
    return Math.max(leftDeep, rightDeep);
  }
  return recursive(root, 1);
};
maxDepth(root);