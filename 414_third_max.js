// 第三大元素
var nums = [2,2,3,1];
var thirdMax = function(nums) {
  var j=-Infinity,k=-Infinity,l=-Infinity;
  for (var i = 0; i<nums.length; i++) {
    if (nums[i]>j) {
      l=k;
      k=j;
      j=nums[i];
      continue
    } else if(nums[i]<j && nums[i]>k) {
      l=k;
      k=nums[i];
      continue
    } else if (nums[i] < k && nums[i]>l){
      l = nums[i]
    }
  }
  return l === -Infinity ? j : l;
}
console.log(thirdMax(nums))