/**
 * @desc 反转单向链表
 * @author 羊支甘陆
 */

/**
 * 定义链表结构
 */
interface ILinkListNode {
  value: number
  next?: ILinkListNode
}

/**
 * 反转单向链表，并返回反转之后的head node
 * @param listNode 
 */
function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  // 定义三个指针
  let prevNode: ILinkListNode | undefined = undefined
  let curNode: ILinkListNode | undefined = undefined
  let nextNode: ILinkListNode | undefined = listNode

  // 以nextNode为主，遍历链表
  while(nextNode) {
    // 遇到第一个元素，删掉next, 防止循环引用(删除第一个的next)
    if (curNode && !prevNode) {
      // @ts-ignore
      delete curNode.next
    }
    // 反转指针
    if (curNode && prevNode) {
      // @ts-ignore
      curNode.next = prevNode
    }
    // 整体向后移动指针
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next
  }
  // 最后一个的补充：当nextNode为空时，此时curNode尚未设置next
  curNode!.next = prevNode
  return curNode!
}

/**
 * 根据数组创建单向链表
 * @param arr 
 */
function createLinkList(arr: number[]): ILinkListNode {
  const length = arr.length 
  if(length === 0) throw new Error('array is empty')
  // arr: [100, 200, 300]
  // { value: 300 }
  // { value: 200, next: { value: 300 }}
  // { value: 100, next: { value: 300 { value: 200, next: { value: 300 }}}
  let curNode: ILinkListNode = {
    value: arr[length - 1]
  }
  if(length === 1) return curNode
  // 从数组倒数第二项开始往前一步步减
  for( let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

const arr = [100, 200, 300, 400, 500]
const list = createLinkList(arr)
console.info('list:', list)

const list1 = reverseLinkList(list)
console.info('list1:',list1)