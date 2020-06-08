// 求滑动窗口的最大值  这个还可以用队列来处理  单调队列 todo
var nums = [1,3,-1,-3,5,3,6,7], k = 3;
function name (nums, k) {
  var res = [];
  if (k == 0) {
    return [];
  }
  for (let i = 0; i <= nums.length - k; i++) {
    var max = nums[i];
    for (let j = i; j < i+k; j++) {
      if (nums[j]>max) {
        max = nums[j];
      }
    }
    res.push(max);
  }
  return res;
}

console.log(name(nums, k));