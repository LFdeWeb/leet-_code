// 外观数列 todo
var q2 = [];
// 1
// 11
// 21
// 1211
// 111221
function out (n) {
  var q1 = [1];
  if (n == 1) {
    return '1';
  }
  var count = 1;
  while (n>0) {
    var cur = q1.pop(); // 将最后一个拿出
    q2.unshift(cur);    // 将拿出的插入到q2 中
    while (q1.length) {
      var before = q1.pop();
      if (cur == before) {
        count++;
      } else {
        cur = before;
        q2.push(count); // 如果不相等了 则推入到
        q2.push(cur); // 如果不相等了 则推入到
        count=1;
      }
    }
    q2.unshift(count);
    n--
  }
  return q2.toString();
}

console.log(out(11));

function reg (n) {
  var str = '1';
  for (let i = 1; i < n; i++) {
    str = str.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return str;
}

console.log(reg(5));