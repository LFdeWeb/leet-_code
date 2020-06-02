var sumNums = function (n) {
  function recursive (num) {
    if (num == 1) {
      return num;
    } else {
      return num + recursive(num-1);
    }
  }
  return recursive(n);
}

// todo 改成了 尾递归  具体递归是否生效还得再看  时间击败百分之九 空间击败 100%
var sumNums = function (n) {
  function recursive (num, acc) {
    if (num == 1) {
      return acc+1;
    } else {
      return recursive(num-1, acc+num);
    }
  }
  return recursive(n, 0);
}