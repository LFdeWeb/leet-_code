var diZengArr = Array(100).fill(1).map((item, index) => { return index});
var shuffleArr = [...diZengArr];
for (let i = shuffleArr.length-1; i >=0 ; i--) {
  let random = parseInt(Math.random() * i);
  [shuffleArr[random], shuffleArr[i]] = [shuffleArr[i], shuffleArr[random]];
}
console.log(shuffleArr);
module.exports = { diZengArr , shuffleArr}

// console.log(diZengArr);
// exports = {
//   diZengArr
// }
//