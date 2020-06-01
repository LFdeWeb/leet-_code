var arr = [1,1,2];
var a = remove(arr);
console.log(a);
// 使用while 循环   内存击败百分之6.35  time 击败 百分之17
function remove (nums) {
  var i = 0;
  while (i <nums.length) {
    if (nums[i+1] == nums[i]) {
      nums.splice(i,1);
    } else {
      i++;
    }
  }
  return nums;
}
var num = DPonit(arr);
console.log(num);
// 不知道为什么效率就是不够高
function DPonit (nums) {
  let i = 0; // 慢指针
  let j = 0;
  while (j < nums.length) { // j 为快指针
    j++;
    if (nums[i] != nums[j]) {
      arr[++i] = nums[j];
    }
  }
  return i+1; // 这个查获高难度
}