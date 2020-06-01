// 青蛙跳台阶问题 todo   得用尾递归
function numWays (n, ac1 = 1, ac2 = 1) {
  if (n <= 1) return ac1;
  // return numWays(n-1) + numWays(n-2);  // 这里返回两个函数 这个不是  尾递归得返回一个函数
  return numWays(n - 1, ac2, ac1+ac2)  // 这个尾调用是用参数做了计算体  感觉如果读取了 外部函数的变量 形成 闭包 以后可能尾调用就不会生效了
}

console.log(numWays(3))