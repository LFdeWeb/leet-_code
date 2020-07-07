// 最接近三数之和
// todo 待定没有完成
var nums = [-1,2,1,-4];

function close (nums, target) {
  var arr = [...nums].sort((a, b) => a-b);
  var abs = Infinity;
  var sum;
  for (let i = 1; i < arr.length-1; i++) {
    var middle = arr[i];
    var left = 0;
    var right = arr.length-1;
    while (left<right) {
      // 跳过元素
      left = left == i ? ++left:left;
      right = right == i ? --right:right;
      sum = arr[left] + middle + arr[right];
      var curCha = sum - target;
      abs = Math.min(abs, Math.abs(curCha));
      if (curCha<0) { // 如果当前值差小于0 左元素右移
        left++
      } else if (curCha>0) { // 如果当前差大于0  右元素左移
        right--
      } else {
        abs = 0; // 否则元素满足要求
        right--;
        left++;
      }
    }
  }
  console.log(sum)
  return sum;
}
close(nums, 1);