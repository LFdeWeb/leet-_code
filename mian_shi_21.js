// 面试题21. 调整数组顺序使奇数位于偶数前面   这种题就是双指针问题
var nums = [1,2,3,4];
function name (nums) {
  let i=0, j= nums.length-1;
  while (i<j) {
    while (i<j && odd(nums[i])) {
      i++;
    }
    while (i<j && !odd(nums[j])) {
      j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  function odd (item) {
    return (item & 1) == 1;
  }
}
name(nums)
console.log(nums);