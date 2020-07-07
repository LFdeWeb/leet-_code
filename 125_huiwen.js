// 验证回文
// var s = "A man, a plan, a canal: Panama";
var s = "race a car";
var s = ".,";
function huiwen (s) {
  let left = 0;
  let right = s.length-1;

  let reg = /[\w\d]/
  while (left<right) {
    while (left<s.length && !reg.test(s.charAt(left))) { // 当监测到 不是数字或者字符串 进行left right 变化
      left++
    }
    while (right>-1 && !reg.test(s.charAt(right))) { // 当监测到 不是数字或者字符串 进行left right 变化
      right--
    }
    if (!(new RegExp(`${s.charAt(right)}`, 'i').test(s.charAt(left)))){
      return false
    } else {
      left++;
      right--;
    }

  }
  return true
}

console.log(huiwen(s));

function n123 (n) {
  console.log(n);
}
n123(123213)