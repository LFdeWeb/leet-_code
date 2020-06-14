var temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// 这个可以使用暴力 或者单调递减栈
function name (T) {
  var stack = [];
  var ans = Array(T.length).fill(0); //  直接填充可以避免后面的循环不到
  for (let i=0; i < T.length; i++) {
    while (stack.length && T[i]>T[stack[stack.length-1]]) { //
     //  这个index 得存储下来  不可能每次都设置i-1的位置
      let preIndex = stack.pop(); // 栈顶是最后一个index
     ans[preIndex] = (i - preIndex);
    }
    stack.push(i); //
  }
  return ans;
}
name(temperatures);