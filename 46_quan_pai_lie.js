var a = [1, 2, 3]

function permute (nums) {
  var result = []
  let route = []
  backTrack(nums, route)

  function backTrack (nums, route) {
    if (route.length == nums.length) {
      result.push([...route]) // 这里对route进行拷贝
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!route.includes(nums[i])) { // 这里的复杂度会很高  使用元素替换位置应该会比较好
        route.push(nums[i])  // 推入
        backTrack(nums, route) // 这一行不会修改原有的现场  所以不用恢复现场
        route.pop() // 推出  恢复现场
      }
    }
  }

  return result
}

console.log(permute(a))