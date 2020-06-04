// 第一个只出现一次的字符
function name (s) {
  // todo 数组的这种方法真是值得好好看看  感觉用for循环 代码量很大
  var obj = {};
  for (let i of s) {
    obj[i] = obj[i] === undefined ? false : obj[i] === false ? true : true;
  }
  var arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === false) {
      return arr[i];
    }
  }
  return ' ';
}

console.log(name('abaccdeff'))