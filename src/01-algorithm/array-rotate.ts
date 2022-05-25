/**
 * 将一个数组旋转K步--使用pop和unshift
 * @param arr Array
 * @param k Number
 * @returns Array
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length
  // 判断意外情况
  if(!k || length === 0) return arr
  // 判断k是否是负数，取绝对值，判断k是否超过length，取余
  const step = Math.abs(k % length)
  // O(n^2)
  for(let i = 0; i < step; i++) {
    const n = arr.pop()
    if (n != null ) {
      arr.unshift(n) // 数组是一个有序结构，unshift操作非常慢 O(n) 类似的还有shift,splice
    }
  }
  return arr
}

/**
 * 将一个数组旋转K步--使用concat
 * @param arr 
 * @param k 
 */
 export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length
  // 判断意外情况
  if(!k || length === 0) return arr
  // 判断k是否是负数，取绝对值，判断k是否超过length，取余
  const step = Math.abs(k % length)
  // O(1)
  // 从结尾开始截取
  const part1 = arr.slice(-step)
  // 从0开始截取
  const part2 = arr.slice(0, length - step)
  const part3 = part1.concat(part2)
  return part3
}
// 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const arr1 = rotate2(arr, 3)
// console.info(arr1)

// 性能测试
// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//   arr1.push(i)
// }
// console.time('rotate1')
// rotate1(arr1, 9 * 10000)
// console.timeEnd('rotate1') //4582.881103515625 ms O(n^2)

// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//   arr2.push(i)
// }
// console.time('rotate2')
// rotate2(arr2, 9 * 10000)
// console.timeEnd('rotate2') //1.16015625 ms O(1)