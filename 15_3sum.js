// 15. 三数之和
var nums = [-1, 0, 1, 2, -1, -4]
// todo error 这个没有成功
function three (nums) {
  var res = []
  var arr = nums.sort((a, b) => a-b);

  if (arr[0] <= 0 && arr[arr.length - 1] >= 0) {  // 符号相同 返回
    for (let i = 0; i < arr.length - 2; i++) {
      let j = i+1;
      let k = arr.length-1;
      while (j<k) {
        var result = arr[j] + arr[i] + arr[k];
        if (result<0) {
          j++
        } else if (result>0) {
          k--
        } else {
          res.push([arr[j++], arr[i], arr[k--]])
        }
      }
      if (arr[i] == arr[i+1]) {
        i++
      }
    }
  }
  return res;
}
three(nums);
// 1. 两数之和  done
function twoSum (nums, target) {
  var obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      return [obj[nums[i]], i]
    }

    obj[target - nums[i]] = i
  }
  return []
}
var threeSum = function (nums) {
  let res = []
  let length = nums.length;
  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last]
        if (result === 0) { // 如果可以组队
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
        } else { // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last)
      while (nums[i] === nums[++i]) {} // 这里是防止重复的
    }
  }
  return res
}