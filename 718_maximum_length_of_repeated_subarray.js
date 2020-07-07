var A = [1,2,3,2,1]
  var B = [3,2,1,4,7]
// todo 根本不对
getSuB(A,B);
function getSuB (A, B) {
  var a = A.length;
  var b = B.length;
  var dp = new Array(a+1).fill(new Array(b+1))
    dp = dp.map(item => item.fill(0));
  var ans = 0;
  for (let i = a-1; i>=0 ; i--) {
    for (let j = b-1; j>= 0 ; j--) {
      dp[i][j] = A[i] == B[j] ? dp[i+1][j+1] +1 : 0;
      ans = Math.max(ans, dp[i][j])
    }
  }
  console.log(ans);
  return ans;
}