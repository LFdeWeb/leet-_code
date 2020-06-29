// 第k大的元素  小顶堆
var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6] //k = 4
var arr = [2, 1]
console.log(getK(nums, 4))

function getK (nums, k) {
  buildHeap(nums, k) // 构建小顶堆完成 前k个元素 建堆
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > nums[0]) {
      swap(nums, i, 0)
      adjustHeap(nums, 0, k) // todo 这里格外注意 不要弄错了
    }
  }
  return nums[0]

  function buildHeap (nums, k) {
    let feiye = parseInt((k / 2) - 1)
    while (feiye >= 0) {
      adjustHeap(nums, feiye--, k)
    }
  }

  // 堆调整创建小顶堆
  function adjustHeap (nums, index) {
    var left = 2 * index + 1
    var right = 2 * (index + 1)
    var min=index;
    if (left < k && nums[left] < nums[index]) { // 可以等于
      min = left
    }
    if (right < k && nums[right] < nums[min]) {
      min = right
    }
    if (min !== index) {
      swap(nums, min, index)
      adjustHeap(nums, min, k)
    }
  }

  function swap (nums, i, j) {
    [nums[j], nums[i]] = [nums[i], nums[j]]
  }

}