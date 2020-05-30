var arr = require('./outputArr').shuffleArr;
mergeSort(arr);
function mergeSort (nums) {
  // 合并数组
  function merge (l1, r1, l2, r2) {
    let arr = [], i = l1, j = l2, index = 0;
    while (i <= r1 && j <= r2) {
      arr[index++] = nums[i] > nums[j] ? nums[j++] : nums[i++];
    }
    while (i <= r1) arr[index++] = nums[i++];
    while (j <= r2) arr[index++] = nums[j++];
      //  这里进行 覆盖原有数组
    for (let k = 0; k < arr.length; k++) {
      nums[l1+ k] = arr[k];
    }
  }
  // 进行 递归二分计算
  function recursive (left, right) {
    if (left >= right) return ;
    let middle = parseInt((right - left)/2) + left;
    recursive(left, middle);
    recursive(middle +1, right);
    merge(left, middle, middle +1, right);
  }
  recursive(0, nums.length-1);
  console.log(nums);
}
