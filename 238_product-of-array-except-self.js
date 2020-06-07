// 238 除了自身 意外数组的乘积
function name (nums) {
  var temp1 = [1];
  var temp2 = [];
  var result = [];
  temp2[nums.length-1] = 1;
  for (let i = 1; i < nums.length; i++) {
    temp1[i] = nums[i-1] * temp1[i-1];
  }

  for (let j = nums.length-2; j >= 0; j--) {
    temp2[j] = nums[j+1] * temp2[j+1];
  }

  for (let k = 0; k < nums.length; k++) {
    result[k] = temp1[k] * temp2[k];
  }
  return result;
}
var a = [1,2,3,4];
console.log(name(a));