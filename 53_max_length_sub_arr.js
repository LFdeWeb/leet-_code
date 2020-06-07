// 子数组 的最大和 使用动态规划 感觉代码结构还有 很大的优化空间
let nums = [1];

function name (nums) {
  var dp = [];
  dp[0] = nums[0];
  let max = nums[0];
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      if (dp[i - 1] < 0) {
        dp[i] = nums[i]
      } else {
        dp[i] = dp[i - 1] + nums[i]
      }
      if (dp[i] > max) {
        max = dp[i];
      }
    }
  }
  return max;
}

console.log(name(nums));