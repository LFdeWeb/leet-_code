// 输入: [100, 4, 200, 1, 3, 2]
// 输出: 4
// 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
var s = [100, 4, 200, 1, 3, 2];
name(s);
function name (s) {
  var set = new Set(s);
  var max = 0;
  var curC = 0;
  set.forEach((item) => {
    if (!set.has(item-1)) {
      while (set.has(item+1)) {
        curC++;
      }
      max = curC > max ? curC : max;
    }
    curC = 1;
  })
  return max
}