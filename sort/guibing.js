var arr = require('./outputArr').shuffleArr;

function mergeSort (nums) {
  function merge (l1, r1, l2, r2) {
    let arr = [], index = 0, i = l1, j = l2;
    while (i<=r1 && j<=r2) {
      arr[index++] = nums[i] > nums[j] ? nums[j++] : nums[i++];
    }
    while (i<=r1) arr[index++] = nums[i++];
    while (j<=r2) arr[index++] = nums[j++];
    for (let k = 0; k < index; k++) {
      nums[l1 + k ] = arr[k];
    }
  }

  function recursive (left, right) {
    if (left >= right) return ;
    const  mid = parseInt((right -left)/2) +left;
    recursive(left, mid);
    recursive(mid+1, right);
    merge(left, mid, mid +1, right);
  }
  recursive(0, nums.length -1);
}
mergeSort(arr);
console.log(arr);