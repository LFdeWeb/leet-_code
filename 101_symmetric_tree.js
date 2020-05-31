// 101 对称二叉树
var tree = {};
function judge (root) {
  if (!root) {
    return true;
  }
  let stack = [], // 当前层
    temp =[]; // 下一层
  stack.push(root);
  while (stack.length) {
    var item = stack.shift();
    temp.push(item && item.left || null); // 这里如果没有元素就推入空
    temp.push(item && item.right || null);
    if (!stack.length) {
      if (temp.every(item  => item === null)) {
        return true
      }
      if (shuangzhizhen(temp)) { // 如果当前的下一层是完全对称的 就往下进行
        stack = [...temp];
        temp.length = 0;
      } else{
        return false
      };
    }
  }
  // 双指针
  function shuangzhizhen  (stack) {
    let i = 0, j = stack.length-1;
    while (i<=j) {
      if ((stack[i] == stack[j])) {
        i++;
        j--;
        continue
      } else {
        if ( stack[i] && stack[j] && stack[i++].val == stack[j--].val) {
          continue
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
judge(root);