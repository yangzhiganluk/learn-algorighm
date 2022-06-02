/**
 * @description Array rotate test
 * @author 羊支甘陆
 */
import { rotate2 } from "./array-rotate";

describe('数组旋转', () => { // 一组测试用例
  it('正常情况', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('数组为空', () => {
    const res = rotate2([], 3)
    expect(res).toEqual([])
  })
  it('k是负值', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = -3
    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('k是0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 0
    const res = rotate2(arr, k)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
  it('k不是数字', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 'abc'
    // @ts-ignore
    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
})