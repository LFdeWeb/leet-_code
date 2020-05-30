// 判断两个二叉树的值是否是相同的 没有进行测试
var tree1 = {
  value: 1,
  left: {},
  right: {},
};
var tree2 = {};
var status = {equl:true};
function judge (tree1, tree2, status) {
  if (!status.equl) {
    return
  }
  if (tree1.left && tree1.left == tree2.left && tree1.left.value == tree2.left.value) {
    judge(tree1.left, tree2.left, status);
  } else {
    return status.equl = false;
  }
  if (tree1.left && tree1.left == tree2.left && tree1.left.value == tree2.left.value) {
    judge(tree1.right, tree2.right, status);
  } else {
    return status.equl = false;
  }
  return status
}

judge(tree1,tree2, status);