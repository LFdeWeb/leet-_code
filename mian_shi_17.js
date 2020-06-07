// 面试题17. 打印从1到最大的n位数
// 遍历

function name (n) {
  var arr = [];
  var max = '1';
  var start = 1;
  while (n>0) {
    max += '0';
    n--;
  }
  while (start<max) {
    arr.push(start);
    start++
  }
  return arr;
}

console.log(name(2));

