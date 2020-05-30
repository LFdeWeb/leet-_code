var arr = require('./sort/outputArr.js').diZengArr;
erfen(arr);
function erfen (arr) {
  var target = 12;
  let left = 0;
  let right = arr.length-1;
  let middleIndex;
  while (left<right) {
    middleIndex = parseInt((right -left)/2) + left;
    let middleValue = arr[middleIndex];
    if (middleValue > target) {
      right = middleIndex
    } else if (middleValue < target ) {
      left = middleIndex;
    } else {
      console.log(middleIndex);
      return middleIndex;
    }
  }
}