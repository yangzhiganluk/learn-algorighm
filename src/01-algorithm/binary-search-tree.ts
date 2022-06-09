/**
 * @desc 二叉搜索树
 * @author 羊支甘陆
 */

/**
 * BST
 * left（包括其后代）value <= root value
 * right（包括其后代）value >= root value
 * 可使用二分法进行快速查找
 */

export interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

const arr: number[] = []
/**
 * 二叉树前序遍历
 * @param node 
 */
function preOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  // console.log(node.value)
  arr.push(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

/**
 * 二叉树中序遍历
 * @param node 
 * @returns 
 */
function inOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  inOrderTraverse(node.left)
  // console.log(node.value)
  arr.push(node.value)
  inOrderTraverse(node.right)
}

/**
 * 二叉树后序遍历
 * @param node 
 * @returns 
 */
function postOrderTraverse(node: ITreeNode | null) {
  if (node == null) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  // console.log(node.value)
  arr.push(node.value)
}

/**
 * 寻找BST里的第K小值
 * @param node 
 * @param k 
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
  inOrderTraverse(node)
  console.log(arr)
  return arr[k - 1] || null
}

const bst: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    },
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

// 功能测试
// preOrderTraverse(bst)
// inOrderTraverse(bst)
// postOrderTraverse(bst)

// console.log(getKthValue(bst, 3))