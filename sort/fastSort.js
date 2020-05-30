var arr = require('./outputArr').shuffleArr;

function fast (arr) {
  function getMid (arr, left, right) {
    console.log(right)
    var stand = left,
      i = left +1,
      j = right;
    while (i<=j) {
      while (i<=j && arr[i] < arr[stand]) {
          i++
      }
      while (i<=j && arr[j] > arr[stand]) {
          j--
      }
      if (i<=j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        j--;
        i++;
      }
    }
    [arr[j], arr[stand]] = [arr[stand], arr[j]];
    return j;
  }

  function recursive (arr, left, right) {
    if (left >= right) return;
    let mid = getMid(arr, left, right);
    recursive(arr, left, mid-1);
    recursive(arr, mid+1, right);
  }
  recursive(arr, 0, arr.length-1);
}
fast(arr);
console.log(arr);