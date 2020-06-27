// 199 题广度有限遍历  广度优先 没有递归  直接一个函数就出来了
function right (root) {
    let que = [];
    que.push(root);
    let result = [];
    let tempque = [];
    while (que.length) {
      let temp = que.shift();
      if (que.length == 0) {
        result.push(temp.val);
        que = [...tempque]
        tempque = [];
      }
      temp.left && tempque.push(temp.left);
      temp.right && tempque.push(temp.right);
    }
}

// 深度优先
var root = {
  val: 1,
  left: {
    val: 2
  }
}
right_see(root);
function right_see (root) {
  let result = [];
  var dep = 0;
  recursive(root, dep);
  function recursive (root, dep) {
    if (!root) return ;
    if (dep>=result.length) {
      result.push(root.val);
    }
    root.right && recursive(root.right, dep+1);
    root.left && recursive(root.left, dep+1);
  }
  return result;
}
