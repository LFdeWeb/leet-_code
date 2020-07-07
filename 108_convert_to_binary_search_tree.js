var nums = [-10,-3,0,5,9]

function makeTree (nums) {
  return recursive(nums, 0, nums.length-1)
  function recursive (nums, left, right) {
    if (left>right) {
      return null;
    }
    var middle = parseInt((left+right)/2);
    var tree = new TreeNode(nums[middle]);
    tree.left = recursive(nums, left, middle-1);
    tree.right = recursive(nums, middle+1, right);
    return tree;
  }
}