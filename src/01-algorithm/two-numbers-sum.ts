/**
 * @desc 两数之和
 * @author 羊支甘陆
 */

/**
 * 寻找和为n的两个数
 * @param arr 
 * @param n 
 * @returns 
 */
export function findTwoNumbers1(arr: number[], n: number): number[] {
  const res: number[] = []
  const length = arr.length
  if(length === 0) return res
  for(let i = 0; i < length - 1; i++) {
    const n1 = arr[i]
    let flag = false // 是否得到了结果
    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j]
      if (n1 + n2 === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }
    if (flag) break
  }
  return res
}

// 功能测试
const arr = [1, 2, 4, 7, 11, 15]
console.info(findTwoNumbers1(arr, 15))