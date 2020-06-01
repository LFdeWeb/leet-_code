// 54 遍历矩阵
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  var res = [], l=0,t=0,r,b,index=0;
  b = matrix.length-1;
  r = matrix[0].length-1;  // 这里直接取长度-1 就可以了
  while (true) {
    for(let i=l; i<=r; i++ ) {
      res[index++] = matrix[t][i];
    }
    if(++t>b)break;
    for(let i=t; i<=b; i++ ) {
      res[index++] = matrix[i][r];
    }
    if(--r<l)break;
    for(let i=r; i>=l; i-- ) {
      res[index++] = matrix[b][i];
    }
    if(--b<t)break;
    for(let i=b; i>=t; i-- ) {
      res[index++] = matrix[i][l];
    }
    if(++l>r)break;
  }
  return res;
}
var  a = spiralOrder(matrix);
console.log(a);

