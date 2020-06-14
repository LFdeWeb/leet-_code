// 第9题 回文数
// 双指针
var a = 123321;
console.log(isPalindrome(a));
function isPalindrome (x) {
  if (x<0) return false
  var str = String(x);
  let i=0, j=str.length-1;
  while (i<j) {
    if (str.charAt(i++) !== str.charAt(j--)) {
      return false;
    }
  }
  return true;
}
// todo 以后补充数学解法和 %10 解法
