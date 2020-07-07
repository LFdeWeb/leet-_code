// 缺失的数字
// 方法1 遍历
function name (nums) {
  for (let i = 0; i < nums.length+1; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
}
// 方法2 二分法
function divide (nums) {
  let left = 0;
  let right = nums.length-1;
  let middle = left + parseInt((left+right)/2);
  while (nums[left] !== left && middle == nums[middle]) {
    right = middle;
    middle = left + parseInt((left + right)/2);
  }
  while (nums[right] !== right ) {
  }
}