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