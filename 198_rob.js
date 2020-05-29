// 此处使用 添加新数组记忆功能 来进行 动态规划判断  
// 这里其实也可以不添加新的数组 直接使用变量进行计算就可以 本题的这个动态规划 感觉就是一种贪心算法
var rob = function(nums) {
    var dp = [];
    if (nums.length == 0) dp[0] = 0;
    if (nums.length >= 1)  dp[0] = nums[0];
    if (nums.length >= 2) {
        dp[1] = Math.max(nums[0], nums[1]);
        for (var i = 2; i< nums.length; ++i) {
            dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
        }
    }
    
    return dp[dp.length-1];
}
