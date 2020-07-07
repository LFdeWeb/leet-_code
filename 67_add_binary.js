// 二进制求和
var a = '1010', b = '1011'

function add (a, b) {
  var maxL = Math.max(a.length, b.length);
  var jinwei = 0;
  var cur = '';
  for (let i = 0; i < maxL; i++) {
    jinwei += i < a.length ? (a.charAt(a.length-1-i) == '0' ? 0 : 1) : 0; // 这个使用反方向的 获取方式 先获取低位的 然后中间用 a.length 来做减法
    jinwei += i < b.length ? (b.charAt(b.length-1-i) == '0' ? 0 : 1) : 0;
    cur += jinwei % 2;  // 当前位留下什么用2 来求余 就可以了
    jinwei = parseInt(jinwei / 2);  // 进位用什么就用
  }
  if (jinwei > 0) {  // 如果在最后有进位了 那么就 手动添加一位就可以了
    cur += '1'
  }
  return [...cur].reverse().join('');
}
add(a, b);
