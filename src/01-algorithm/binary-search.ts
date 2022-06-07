/**
 * @desc 二分查找
 * @author 羊支甘陆
 */

/**
 * 二分查找(循环)
 * @param arr 
 * @param target 
 * @returns 
 */
export function binarySearch1(arr: number[], target: number): number {
  const length = arr.length
  if(length == 0)  return -1
  // 当前查找区域的开始和结束
  let startIndex = 0
  let endIndex = length - 1
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue =  arr[midIndex]
    if (target < midValue) {
      // 目标值较小，则继续在左侧查找
      endIndex = midIndex - 1
    } else if (target > midValue) {
      // 目标值较大，则继续在右侧查找
      startIndex = midIndex + 1
    } else {
      // 相等，返回
      return midIndex
    }
  }
  return -1
}

/**
 * @desc 二分查找(递归)
 * @param arr 
 * @param target 
 * @param startIndex 
 * @param endIndex 
 */
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
  const length = arr.length
  if(length == 0)  return -1
  // 开始和结束的范围
  if (startIndex == null) startIndex = 0
  if (endIndex == null) endIndex = length - 1
  // 如果start 和 end 相遇，则结束
  if (startIndex > endIndex) return -1
  // 中间位置
  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue =  arr[midIndex]
  if (target < midValue) {
    // 目标值较小，则继续在左侧查找
    endIndex = midIndex - 1
    return binarySearch2(arr, target, startIndex, endIndex)
  } else if (target > midValue) {
    // 目标值较大，则继续在右侧查找
    startIndex = midIndex + 1
    return binarySearch2(arr, target, startIndex, endIndex)
  } else {
    // 相等，返回
    return midIndex
  }
}

// 功能测试
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
const target = 20
// console.info(binarySearch2(arr, target))

// 性能测试
console.time('binarySearch1')
for (let i = 0; i < 100 * 1000; i++) {
  binarySearch1(arr, target)
}
console.timeEnd('binarySearch1')

console.time('binarySearch2')
for (let i = 0; i < 100 * 1000; i++) {
  binarySearch2(arr, target)
}
console.timeEnd('binarySearch2')
