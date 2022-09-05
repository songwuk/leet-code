/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/** 寻找重复的子树 - middle
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
interface TreeNode{
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
let ans: Array<TreeNode>
let maps: Map<string,number>
export function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null>{
  ans = new Array<TreeNode>()
  maps = new Map<string,number>()
  dft(root)
  return ans
}

function dft(root: TreeNode | null): string{
  if(!root) return ''
  let key = root.val + '_'
  key += dft(root.left)
  key += dft(root.right)
  if(!maps.has(key)){
    maps.set(key, 1)
  } else {
    maps.set(key, maps.get(key) as number + 1)
  }
  if(maps.get(key) === 2){
    ans.push(root)
  }
  return key
}
