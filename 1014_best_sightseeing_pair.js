// 最佳观光组合
var a = [8,1,5,2,6];
function name (A) {
  let score = 0;
  let max = A[0];
  for (let i = 1; i < A.length; i++) { // 这种写法很好 边界处理  从第一个开始 处理边界值非常的棒
    score = Math.max(score, max + A[i] -i); // 这个得是之前的得分不能算上当前的得分
    max = Math.max(max, (A[i] + i));
  }
  return score;
}

console.log(name(a));