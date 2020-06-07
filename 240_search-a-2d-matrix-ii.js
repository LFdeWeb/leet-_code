// 二维数组中 寻找i
function name (matrix, target) {
  var width = matrix[0] && matrix[0].length;
  var height = matrix.length;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false
}