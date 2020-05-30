// leetcode 通过
// 这个是深度优先进行递归  这个应该也可以不用变量来进行计算  内存是战胜100%  时间战胜 13%
var root = {
  value: 3,
  left: {
    value: 9
  },
  right: {
    value: 20,
    left: {
      value: 15
    },
    right: {
      value: 7
    },
  }
}
var maxDepth = function (root) {
  if (!root) return 0

  function recursive (tree, deep) {
    var leftDeep = tree.left && recursive(tree.left, deep + 1) || deep
    var rightDeep = tree.right && recursive(tree.right, deep + 1) || deep
    return Math.max(leftDeep, rightDeep)
  }

  return recursive(root, 1)
}
// maxDepth(root);
var a = BFS(root)
console.log(a)

// 运行速度 66.23%
// 看了下题解 还可以广度优先进行遍历  添加暂存队列（ 下一层的数据） 暂存层和当前层进行分离
function BFS (root) {
  var queue = [], // 遍历队列
    temp = [], // 暂存队列
    res = 0 // 结果
  if (!root) return res
  queue.push(root)
  while (queue.length) {
    var i = queue.shift()
    if (i.left) temp.push(i.left)// 这里的数据不要推错了 我之前推成了 root
    if (i.right) temp.push(i.right)
    if (!queue.length) { // 如果没有长度就将 temp 推入 quene
      res += 1
      queue = [...temp] //这里的temp 记得清空
      temp.length = 0
    }
  }
  return res;
}